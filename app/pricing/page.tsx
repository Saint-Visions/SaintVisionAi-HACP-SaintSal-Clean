import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, Zap, Building2 } from "lucide-react";

const plans = [
  {
    name: "Unlimited",
    price: "$27",
    period: "/month",
    description: "Perfect for individuals and small teams",
    features: [
      "Unlimited AI Chat Sessions",
      "GPT-4o + Azure Dual Engine",
      "Mobile & Web Access",
      "Basic Chrome Extension",
      "Email Support",
      "Standard Response Times",
    ],
    icon: Zap,
    popular: false,
    color: "blue",
  },
  {
    name: "PartnerTech Pro",
    price: "$97",
    period: "/month",
    description: "Advanced CRM and automation tools",
    features: [
      "Everything in Unlimited",
      "Advanced CRM Integration",
      "Chrome Extension Pro",
      "AI Workflow Triggers",
      "Priority Support",
      "Advanced Analytics",
      "Lead Generation Tools",
    ],
    icon: Building2,
    popular: true,
    color: "green",
  },
  {
    name: "Enterprise",
    price: "$497",
    period: "/month",
    description: "Full enterprise suite with admin controls",
    features: [
      "Everything in PartnerTech Pro",
      "Admin Dashboard",
      "Team Management",
      "Advanced Security Controls",
      "Custom Integrations",
      "24/7 Phone Support",
      "Dedicated Account Manager",
      "White-label Options",
    ],
    icon: Crown,
    popular: false,
    color: "purple",
  },
];

export default function PricingPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/48bf7ae07524f3ab5cd7dbd41650b41a12d29df9?width=1920)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                alt="SAINTSAL™"
                className="w-16 h-16 rounded-xl"
              />
              <h1 className="text-5xl font-bold text-primary">
                SAINTSAL™ Pricing
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your divine AI journey. All plans
              include our revolutionary HACP™ dual-engine technology.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "border-primary/50 bg-primary/5 scale-105"
                      : "border-muted/30 bg-background/50"
                  } backdrop-blur-sm`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          plan.color === "blue"
                            ? "bg-blue-500/20 text-blue-400"
                            : plan.color === "green"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/signup">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* HACP Technology */}
          <Card className="bg-background/50 border-primary/30 backdrop-blur-sm mb-16">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                HACP™ Technology Included
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                All plans include our revolutionary{" "}
                <strong className="text-primary">
                  Hierarchical Adaptive Cognitive Processing
                </strong>{" "}
                technology - the dual-brain architecture that sets SAINTSAL™
                apart from every other AI platform.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-primary">
                    Dual-Engine Processing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    GPT-4o and Azure Cognitive Services working in perfect
                    synchronization for unmatched accuracy and reliability.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-primary">
                    Zero Hallucinations
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cross-validation architecture ensures every response is
                    verified and accurate before delivery.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">
                    Can I upgrade or downgrade anytime?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can change your plan at any time. Changes take
                    effect immediately, and billing is prorated.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">
                    What's included in the free trial?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All new accounts get 7 days free access to the Unlimited
                    plan to experience the full HACP™ technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
