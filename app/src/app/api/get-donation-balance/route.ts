import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function GET() {
  try {
    // Get the balance from Stripe
    const balance = await stripe.balance.retrieve();

    // Find CAD balance
    const cadBalance = balance.available.find((b) => b.currency === "cad") || {
      amount: 0,
    };
    const cadPending = balance.pending.find((b) => b.currency === "cad") || {
      amount: 0,
    };

    // Convert from cents to dollars
    const availableAmount = cadBalance.amount / 100;
    const pendingAmount = cadPending.amount / 100;
    const totalAmount = availableAmount + pendingAmount;

    return NextResponse.json({
      amount: totalAmount,
      details: {
        available: availableAmount,
        pending: pendingAmount,
        currency: "CAD",
      },
    });
  } catch (error) {
    console.error("Error retrieving donation balance:", error);

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
