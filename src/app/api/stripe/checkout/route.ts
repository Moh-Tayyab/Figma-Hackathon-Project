import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Product, BillingDetails } from "../../../../../interface";
import saveOrderToSanity from "../../../../../utils/page";

// Load environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Validate required environment variables
if (!stripeSecretKey) throw new Error("STRIPE_SECRET_KEY is missing");
if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is missing");

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-01-27.acacia", // Use a valid Stripe API version
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("Received Request Body:", JSON.stringify(body, null, 2));

    const { cartItems, billingDetails }: { cartItems: Product[]; billingDetails: BillingDetails } = body;
    //console.log("Testing cartItems:", cartItems);

    // Validate cartItems array
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "cartItems must be a non-empty array" }, { status: 400 });
    }

    // Validate billingDetails
    if (
      !billingDetails ||
      typeof billingDetails !== "object" ||
      !billingDetails.fullName ||
      !billingDetails.email
    ) {
      return NextResponse.json({ error: "Invalid billing details structure" }, { status: 400 });
    }

    // Validate cart items structure
    const invalidItems = cartItems.filter(
      (item) =>
        !item.id ||
        typeof item.name !== "string" ||
        typeof item.quantity !== "number" ||
        typeof item.price !== "number" || // Use `price` instead of `finalPrice`
        !item.imageUrl
    );

    if (invalidItems.length > 0) {
      console.error("Invalid cart items detected:", JSON.stringify(invalidItems, null, 2));
      return NextResponse.json({ error: "Invalid cart items structure" }, { status: 400 });
    }

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Prepare Stripe line items
    const lineItems = cartItems.map((item) => {
      const unitAmount = Math.round(item.price * 100); // Convert to cents
      const quantity = Number(item.quantity);

      if (isNaN(unitAmount) || unitAmount <= 0) {
        throw new Error(`Invalid price for item: ${item.name}`);
      }

      if (isNaN(quantity) || quantity <= 0) {
        throw new Error(`Invalid quantity for item: ${item.name}`);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.imageUrl],
            metadata: {
              productId: item.id.toString(),
            },
          },
          unit_amount: unitAmount,
        },
        quantity: quantity,
      };
    });

    console.log("Stripe Line Items:", JSON.stringify(lineItems, null, 2));

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: {
        billingDetails: JSON.stringify(billingDetails),
      },
    });

    // Save the order to Sanity
    try {
      await saveOrderToSanity(billingDetails, cartItems, totalPrice / 100);
    } catch (error) {
      console.error("Error saving order to Sanity:", error);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    // Return session ID
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};