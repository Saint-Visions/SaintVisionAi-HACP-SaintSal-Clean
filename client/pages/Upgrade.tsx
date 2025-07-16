import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Upgrade() {
  const plans = [
    {
      name: "PartnerTech",
      price: "$97",
      period: "/month",
      description: "Professional CRM + AI Tools",
      features: [
        "Everything in Companion",
        "GoHighLevel Integration",
        "Advanced Analytics",
        "Priority Support",
        "Team Collaboration",
        "API Access",
      ],
      popular: true,
      priceId: "price_1RINIMFZsXxBWnjQEYxlyUIy",
    },
    {
      name: "Pro Suite",
      price: "$297",
      period: "/month",
      description: "Complete Enterprise Solution",
      features: [
        "Everything in PartnerTech",
        "White Label Solution",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Custom AI Training",
      ],
      popular: false,
      priceId: "price_1IRNqvFZsXxBWnj0RlB9d1cP",
    },
  ];

  const handleUpgrade = (priceId: string) => {
    // Integrate with Stripe checkout
    window.location.href = `/api/stripe/checkout?price_id=${priceId}`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful SAINTSAL Entrance Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fe0bfd59dd0ee47e5859b1510493a0cfd?format=webp&width=1920)",
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative text-center">
            <p className="text-yellow-400 text-2xl font-medium mb-2">
              Upgrade Your Divine Power
            </p>
            <p className="text-yellow-400 text-lg font-medium mb-1">
              Unlock advanced AI capabilities and become unstoppable with
              your...
            </p>
            <p className="text-yellow-400 text-3xl font-bold">GOTTA GUY™!</p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* Current Plan Status */}
          <Card className="elite-card">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Your Current Plan</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Companion - $27/month
              </Badge>
              <p className="text-muted-foreground">
                You're currently on the Companion plan. Upgrade to unlock more
                divine features!
              </p>
            </CardContent>
          </Card>

          {/* Upgrade Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`elite-card relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center space-y-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full gold-shimmer py-3"
                    onClick={() => handleUpgrade(plan.priceId)}
                  >
                    💎 Upgrade to {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Overview */}
          <Card className="elite-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Why Upgrade Your Divine Power?
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">🚀</div>
                <h3 className="font-semibold text-foreground">
                  Faster Processing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Priority AI processing with instant responses
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="text-4xl">🔧</div>
                <h3 className="font-semibold text-foreground">More Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Access advanced features and integrations
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="text-4xl">💎</div>
                <h3 className="font-semibold text-foreground">
                  Premium Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  Priority customer support and dedicated assistance
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Money Back Guarantee */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              ✅ 30-day money-back guarantee • ✅ Cancel anytime • ✅ Secure
              payment
            </p>
            <p className="text-sm text-muted-foreground">
              Need help deciding?{" "}
              <a href="/pricing" className="text-primary hover:underline">
                Compare all plans
              </a>{" "}
              or{" "}
              <a
                href="mailto:support@saintvisional.com"
                className="text-primary hover:underline"
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
