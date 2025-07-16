import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      className="min-h-screen relative parallax parallax-bg"
      style={{
        fontFamily:
          "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Atmospheric Divine Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/60 to-gray-900/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-800/40 z-1" />

      {/* 3D Golden Particles */}
      <div className="absolute inset-0 z-2">
        <div
          className="absolute top-1/6 left-1/5 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-1 h-1 bg-yellow-300/80 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 15px rgba(253, 224, 71, 0.5), 0 0 30px rgba(253, 224, 71, 0.3)",
            filter: "blur(0.3px)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-amber-400/70 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 18px rgba(245, 158, 11, 0.4), 0 0 35px rgba(245, 158, 11, 0.2)",
            filter: "blur(0.4px)",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                alt="SAINTSAL™"
                className="w-16 h-16"
              />
              <h1 className="text-5xl font-thin tracking-tight text-yellow-400">
                SAINTSAL™ Pricing
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
              Choose the perfect plan for your divine AI journey. All plans
              include our revolutionary HACP™ dual-engine technology.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "border-yellow-400/50 bg-yellow-400/10 scale-105"
                      : "border-yellow-400/20 bg-gray-900/40"
                  } backdrop-blur-md rounded-3xl border`}
                  style={{
                    boxShadow: plan.popular
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 80px rgba(251, 191, 36, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                      : "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center p-8 pb-4">
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
                    <h2 className="text-2xl font-thin tracking-tight text-white">
                      {plan.name}
                    </h2>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-light text-yellow-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-300">{plan.description}</p>
                  </div>

                  <div className="px-8 pb-8">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/signup">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 font-medium"
                            : "bg-gray-800 border border-yellow-400/30 text-yellow-400 hover:bg-gray-700 hover:border-yellow-400/50"
                        } transition-all duration-200`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* HACP Technology */}
          <div
            className="bg-gray-900/40 border border-yellow-400/30 backdrop-blur-md rounded-3xl mb-16"
            style={{
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="p-8 text-center">
              <h3 className="text-2xl font-thin tracking-tight text-yellow-400 mb-4">
                HACP™ Technology Included
              </h3>
              <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto font-light">
                All plans include our revolutionary{" "}
                <strong className="text-yellow-400">
                  Hierarchical Adaptive Cognitive Processing
                </strong>{" "}
                technology - the dual-brain architecture that sets SAINTSAL™
                apart from every other AI platform.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="font-medium mb-2 text-yellow-400">
                    Dual-Engine Processing
                  </h4>
                  <p className="text-sm text-gray-300">
                    GPT-4o and Azure Cognitive Services working in perfect
                    synchronization for unmatched accuracy and reliability.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="font-medium mb-2 text-yellow-400">
                    Zero Hallucinations
                  </h4>
                  <p className="text-sm text-gray-300">
                    Cross-validation architecture ensures every response is
                    verified and accurate before delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="text-center">
            <h3 className="text-2xl font-thin tracking-tight text-yellow-400 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-sm rounded-2xl"
                style={{
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="p-6">
                  <h4 className="font-medium mb-2 text-yellow-400">
                    Can I upgrade or downgrade anytime?
                  </h4>
                  <p className="text-sm text-gray-300">
                    Yes, you can change your plan at any time. Changes take
                    effect immediately, and billing is prorated.
                  </p>
                </div>
              </div>
              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-sm rounded-2xl"
                style={{
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="p-6">
                  <h4 className="font-medium mb-2 text-yellow-400">
                    What's included in the free trial?
                  </h4>
                  <p className="text-sm text-gray-300">
                    All new accounts get 7 days free access to the Unlimited
                    plan to experience the full HACP™ technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
