import { NextResponse } from "next/server";
import saveOrderToSanity from "../../../../utils/page";
 // Your function to save order to Sanity

export async function POST(request: Request) {
  try {
    const { billingDetails, cartItems, totalPrice } = await request.json();

    // Ensure necessary data is available
    if (!billingDetails || !cartItems || !totalPrice) {
      return NextResponse.json({ error: "Missing required data" }, { status: 400 });
    }

    // Call your function to save the order to Sanity
    await saveOrderToSanity(billingDetails, cartItems, totalPrice);

    return NextResponse.json({ message: "Order successfully saved to Sanity" });
  } catch (error) {
    console.error("Error saving order to Sanity:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}