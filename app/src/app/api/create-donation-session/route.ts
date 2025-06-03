import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Debug: Check if environment variable is loaded (only in development)
if (process.env.NODE_ENV === "development") {
  console.log("Stripe Secret Key available:", !!process.env.STRIPE_SECRET_KEY);
  console.log(
    "Stripe Secret Key starts with sk_:",
    process.env.STRIPE_SECRET_KEY?.startsWith("sk_")
  );
}

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(request: NextRequest) {
  try {
    const { amount, isSubscription, success_url, cancel_url } =
      await request.json();

    // Validate input
    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    if (!success_url || !cancel_url) {
      return NextResponse.json({ error: "Missing URLs" }, { status: 400 });
    }

    console.log("Donation request:", {
      amount,
      isSubscription,
      success_url,
      cancel_url,
    });

    if (isSubscription) {
      // Create subscription session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: "UrgenceIA - Don mensuel",
                description:
                  "Soutien mensuel pour la souveraineté numérique du Québec",
              },
              unit_amount: Math.round(amount * 100), // Convert to cents
              recurring: {
                interval: "month",
              },
            },
            quantity: 1,
          },
        ],
        success_url,
        cancel_url,
        allow_promotion_codes: true,
        billing_address_collection: "auto",
        customer_creation: "always",
        metadata: {
          type: "monthly_donation",
          amount: amount.toString(),
        },
      });

      return NextResponse.json({ sessionId: session.id });
    } else {
      // Create one-time payment session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: "UrgenceIA - Don ponctuel",
                description: "Soutien pour la souveraineté numérique du Québec",
              },
              unit_amount: Math.round(amount * 100), // Convert to cents
            },
            quantity: 1,
          },
        ],
        success_url,
        cancel_url,
        allow_promotion_codes: true,
        billing_address_collection: "auto",
        customer_creation: "always",
        metadata: {
          type: "one_time_donation",
          amount: amount.toString(),
        },
      });

      return NextResponse.json({ sessionId: session.id });
    }
  } catch (error) {
    console.error("Error creating donation session:", error);

    // Provide more specific error messages
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
