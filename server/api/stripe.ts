import { Request, Response } from "express";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

let stripe: Stripe;

function getStripe(): Stripe {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-10-28.acacia",
    });
  }
  return stripe;
}

export const createCheckoutSession = async (req: Request, res: Response) => {
  try {
    const { priceId, userId, email } = req.body;

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.VITE_APP_URL || "http://localhost:8080"}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL || "http://localhost:8080"}/upgrade`,
      customer_email: email,
      metadata: {
        userId: userId,
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

export const handleWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;
  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      await handleCheckoutSessionCompleted(
        event.data.object as Stripe.Checkout.Session,
      );
      break;
    case "customer.subscription.deleted":
      await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
      break;
    case "customer.subscription.updated":
      await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
};

// Helper function to map Stripe price IDs to subscription tiers
function getPriceIdToTierMapping(): Record<string, string> {
  return {
    [process.env.VITE_STRIPE_UNLIMITED_PRICE_ID || "price_unlimited"]:
      "unlimited",
    [process.env.VITE_STRIPE_CORETOOLS_PRICE_ID || "price_coretools"]:
      "coretools",
    [process.env.VITE_STRIPE_PRO_PRICE_ID || "price_pro"]: "pro",
    [process.env.VITE_STRIPE_PARTNERTECH_PRICE_ID || "price_partnertech"]:
      "partnertech",
  };
}

const handleCheckoutSessionCompleted = async (
  session: Stripe.Checkout.Session,
) => {
  try {
    console.log("Processing checkout session completed:", session.id);

    const userId = session.metadata?.userId;
    if (!userId) {
      console.error("No userId found in session metadata");
      return;
    }

    // Get the subscription details
    const subscription = await getStripe().subscriptions.retrieve(
      session.subscription as string,
    );
    const priceId = subscription.items.data[0]?.price.id;

    if (!priceId) {
      console.error("No price ID found in subscription");
      return;
    }

    // Map price ID to subscription tier
    const priceToTierMap = getPriceIdToTierMapping();
    const tier = priceToTierMap[priceId];

    if (!tier) {
      console.error("Unknown price ID:", priceId);
      return;
    }

    // Update user subscription tier in Supabase
    const { error: userError } = await supabase
      .from("users")
      .update({
        subscription_tier: tier,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    if (userError) {
      console.error("Error updating user subscription tier:", userError);
      return;
    }

    // Create/update subscription record
    const { error: subError } = await supabase.from("subscriptions").upsert(
      {
        user_id: userId,
        stripe_customer_id: session.customer as string,
        stripe_subscription_id: session.subscription as string,
        tier: tier,
        status: subscription.status,
        current_period_start: new Date(
          subscription.current_period_start * 1000,
        ).toISOString(),
        current_period_end: new Date(
          subscription.current_period_end * 1000,
        ).toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id",
      },
    );

    if (subError) {
      console.error("Error creating subscription record:", subError);
    } else {
      console.log(`Successfully updated user ${userId} to ${tier} tier`);
    }
  } catch (error) {
    console.error("Error in handleCheckoutSessionCompleted:", error);
  }
};

const handleSubscriptionDeleted = async (subscription: Stripe.Subscription) => {
  try {
    console.log("Processing subscription deletion:", subscription.id);

    // Find user by stripe subscription ID
    const { data: subscriptionData, error: findError } = await supabase
      .from("subscriptions")
      .select("user_id")
      .eq("stripe_subscription_id", subscription.id)
      .single();

    if (findError || !subscriptionData) {
      console.error("Could not find subscription:", findError);
      return;
    }

    // Downgrade user to free trial
    const { error: userError } = await supabase
      .from("users")
      .update({
        subscription_tier: "free_trial",
        updated_at: new Date().toISOString(),
      })
      .eq("id", subscriptionData.user_id);

    if (userError) {
      console.error("Error downgrading user:", userError);
      return;
    }

    // Update subscription status
    const { error: subError } = await supabase
      .from("subscriptions")
      .update({
        status: "cancelled",
        updated_at: new Date().toISOString(),
      })
      .eq("stripe_subscription_id", subscription.id);

    if (subError) {
      console.error("Error updating subscription status:", subError);
    } else {
      console.log(
        `Successfully downgraded user ${subscriptionData.user_id} to free trial`,
      );
    }
  } catch (error) {
    console.error("Error in handleSubscriptionDeleted:", error);
  }
};

const handleSubscriptionUpdated = async (subscription: Stripe.Subscription) => {
  try {
    console.log("Processing subscription update:", subscription.id);

    // Find user by stripe subscription ID
    const { data: subscriptionData, error: findError } = await supabase
      .from("subscriptions")
      .select("user_id")
      .eq("stripe_subscription_id", subscription.id)
      .single();

    if (findError || !subscriptionData) {
      console.error("Could not find subscription:", findError);
      return;
    }

    const priceId = subscription.items.data[0]?.price.id;
    if (!priceId) {
      console.error("No price ID found in subscription update");
      return;
    }

    // Map price ID to subscription tier
    const priceToTierMap = getPriceIdToTierMapping();
    const tier = priceToTierMap[priceId];

    if (!tier) {
      console.error("Unknown price ID in update:", priceId);
      return;
    }

    // Update user subscription tier
    const { error: userError } = await supabase
      .from("users")
      .update({
        subscription_tier: tier,
        updated_at: new Date().toISOString(),
      })
      .eq("id", subscriptionData.user_id);

    if (userError) {
      console.error("Error updating user subscription tier:", userError);
      return;
    }

    // Update subscription record
    const { error: subError } = await supabase
      .from("subscriptions")
      .update({
        tier: tier,
        status: subscription.status,
        current_period_start: new Date(
          subscription.current_period_start * 1000,
        ).toISOString(),
        current_period_end: new Date(
          subscription.current_period_end * 1000,
        ).toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("stripe_subscription_id", subscription.id);

    if (subError) {
      console.error("Error updating subscription record:", subError);
    } else {
      console.log(
        `Successfully updated user ${subscriptionData.user_id} to ${tier} tier`,
      );
    }
  } catch (error) {
    console.error("Error in handleSubscriptionUpdated:", error);
  }
};

export const getSubscriptionStatus = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;

    const subscriptions = await getStripe().subscriptions.list({
      customer: customerId,
      status: "active",
    });

    res.json({ subscriptions: subscriptions.data });
  } catch (error) {
    console.error("Get subscription error:", error);
    res.status(500).json({ error: "Failed to get subscription status" });
  }
};
