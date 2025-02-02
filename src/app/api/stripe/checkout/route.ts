// /src/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Product, BillingDetails } from "../../../../../interface";

// Load environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



// Validate required environment variables
if (!stripeSecretKey) throw new Error("STRIPE_SECRET_KEY is missing");
if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is missing");

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-01-31", // Ensure correct Stripe API version
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("Received Request Body:", JSON.stringify(body, null, 2));

    const { cartItems, billingDetails }: { cartItems: Product[]; billingDetails: BillingDetails } = body;
    console.log("testing cartItems",cartItems)
    // Validate cartItems array
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "cartItems must be a non-empty array" }, { status: 400 });
    }

    // Validate billingDetails
    if (!billingDetails || typeof billingDetails !== "object" || !billingDetails.name || !billingDetails.email) {
      return NextResponse.json({ error: "Invalid billing details structure" }, { status: 400 });
    }

    // Validate cart items structure
    const invalidItems = cartItems.filter(
      (item) =>
        !item.id ||
        typeof item.name !== "string" ||
        typeof item.quantity !== "number" ||
        typeof item.finalPrice !== "number" ||
        !item.imageUrl
    );

    if (invalidItems.length > 0) {
      console.error("Invalid cart items detected:", JSON.stringify(invalidItems, null, 2));
      return NextResponse.json({ error: "Invalid cart items structure" }, { status: 400 });
    }

    // Prepare Stripe line items
    const lineItems = cartItems.map((item) => {
      const unitAmount = Math.round(item.finalPrice * 100); // Convert to cents
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

    console.log("Stripe Session Created:", session.id);
    return NextResponse.json({ sessionId: session.id });

  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Payment processing failed" },
      { status: 500 }
    );
  }
};
