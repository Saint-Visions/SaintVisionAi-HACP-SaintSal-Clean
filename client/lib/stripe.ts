import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export const redirectToCheckout = async (
  priceId: string,
  userId: string,
  userEmail: string,
) => {
  try {
    const response = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId,
        userId,
        email: userEmail,
      }),
    });

    const { sessionId } = await response.json();
    const stripe = await stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Stripe checkout error:", error);
      }
    }
  } catch (error) {
    console.error("Checkout redirect error:", error);
  }
};

export const getSubscriptionStatus = async (customerId: string) => {
  try {
    const response = await fetch(`/api/stripe/subscription/${customerId}`);
    const data = await response.json();
    return data.subscriptions;
  } catch (error) {
    console.error("Get subscription error:", error);
    return [];
  }
};

export type PricingTier = {
  id: string;
  name: string;
  price: number;
  priceId: string;
  features: string[];
  tier: "free_trial" | "unlimited" | "coretools" | "pro" | "partnertech";
  popular?: boolean;
  description?: string;
};

export const getPricingTiers = (): PricingTier[] => {
  return [
    {
      id: "free_trial",
      name: "Free Trial",
      price: 0,
      priceId: "", // No price ID for free trial
      tier: "free_trial",
      features: [
        "2 AI conversations",
        "Basic SaintSal™ access",
        "Client Mode chat only",
        "Email support",
      ],
      description: "Try SaintSal™ for free",
    },
    {
      id: "unlimited",
      name: "Unlimited",
      price: 27,
      priceId:
        import.meta.env.VITE_STRIPE_UNLIMITED_PRICE_ID || "price_unlimited",
      tier: "unlimited",
      features: [
        "Unlimited AI conversations",
        "DualBot unlocked",
        "Full SaintSal™ access",
        "Companion Mode",
        "Priority support",
      ],
      popular: true,
      description: "Perfect for individuals",
    },
    {
      id: "coretools",
      name: "Core Tools",
      price: 97,
      priceId:
        import.meta.env.VITE_STRIPE_CORETOOLS_PRICE_ID || "price_coretools",
      tier: "coretools",
      features: [
        "Everything in Unlimited",
        "Chrome Extension access",
        "Advanced AI tools",
        "HACP training portal",
        "Analytics dashboard",
      ],
      description: "For power users",
    },
    {
      id: "pro",
      name: "Pro Suite",
      price: 297,
      priceId: import.meta.env.VITE_STRIPE_PRO_PRICE_ID || "price_pro",
      tier: "pro",
      features: [
        "Everything in Core Tools",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "24/7 phone support",
      ],
      description: "For professionals",
    },
    {
      id: "partnertech",
      name: "Full Pro",
      price: 497,
      priceId:
        import.meta.env.VITE_STRIPE_PARTNERTECH_PRICE_ID || "price_partnertech",
      tier: "partnertech",
      features: [
        "Everything in Pro Suite",
        "Full CRM access",
        "GHL iframe integration",
        "Admin Mode chat",
        "Pipeline management",
        "Client status tracking",
        "Dedicated support",
      ],
      description: "Complete business solution",
    },
  ];
};
