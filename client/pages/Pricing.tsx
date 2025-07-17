import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle,
  ArrowLeft,
  Crown,
  Zap,
  Brain,
  Building2,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    id: "free",
    name: "Free Trial",
    description: "Get started with basic AI companion",
    price: { monthly: 0, yearly: 0 },
    badge: "Start Here",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    features: [
      "2 AI conversations",
      "Basic GPT-4o access",
      "Email support",
      "7-day trial period",
    ],
    limitations: ["Limited to 2 chats", "No CRM integration"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    description: "Unlimited GPT Companion for serious users",
    price: { monthly: 27, yearly: 270 },
    badge: "Most Popular",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
    features: [
      "Unlimited AI conversations",
      "GPT-4o + Azure dual AI",
      "Faith-aligned responses",
      "Priority support",
      "Mobile app access",
      "Basic analytics",
    ],
    limitations: [],
    cta: "Get Unlimited",
    popular: true,
  },
  {
    id: "partnertech",
    name: "PartnerTech",
    description: "CRM access + business automation",
    price: { monthly: 97, yearly: 970 },
    badge: "Business",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/40",
    features: [
      "Everything in Unlimited",
      "GoHighLevel CRM access",
      "Lead automation",
      "Chrome extension",
      "Advanced analytics",
      "Webhook integrations",
      "Priority phone support",
    ],
    limitations: [],
    cta: "Upgrade to PartnerTech",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro Suite",
    description: "Complete business automation suite",
    price: { monthly: 297, yearly: 2970 },
    badge: "Professional",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    features: [
      "Everything in PartnerTech",
      "All AI tools unlocked",
      "Image generator",
      "SVG launchpad",
      "Sticky notes system",
      "Client portal access",
      "Advanced CRM features",
      "Custom integrations",
    ],
    limitations: [],
    cta: "Go Pro",
    popular: false,
  },
  {
    id: "fullpro",
    name: "Full Pro",
    description: "Enterprise-grade with Chrome + webhooks",
    price: { monthly: 497, yearly: 4970 },
    badge: "Enterprise",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    features: [
      "Everything in Pro Suite",
      "Advanced Chrome extension",
      "Full webhook access",
      "Custom automation flows",
      "Dedicated account manager",
      "SLA guarantees",
      "White-label options",
      "API access",
    ],
    limitations: [],
    cta: "Get Full Pro",
    popular: false,
  },
  {
    id: "custom",
    name: "White Label",
    description: "Custom branding and enterprise deployment",
    price: { monthly: 1500, yearly: 15000 },
    badge: "Custom",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
    features: [
      "Everything in Full Pro",
      "Custom branding",
      "White-label deployment",
      "Dedicated infrastructure",
      "Custom training",
      "24/7 dedicated support",
      "Legal compliance review",
      "Custom contract terms",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleUpgrade = (tierId: string) => {
    // Redirect to Stripe checkout based on tier
    console.log(`Upgrading to ${tierId}`, { isYearly });

    if (tierId === "custom") {
      // Redirect to contact form or sales
      window.location.href = "/contact";
    } else {
      // Redirect to Stripe checkout
      window.location.href = `/upgrade?plan=${tierId}&billing=${isYearly ? "yearly" : "monthly"}`;
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F417fa80156424587b5052fdb53a44654)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-yellow-400/20 bg-black/60 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                  alt="SAINTSAL™"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-lg font-bold text-yellow-400">
                  SAINTSAL™
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6"
              style={{
                backgroundColor: "rgba(250, 204, 21, 0.1)",
                borderColor: "rgba(250, 204, 21, 0.4)",
                color: "rgb(250, 204, 21)",
              }}
            >
              <Crown className="w-3 h-3 mr-1" />
              Pricing Plans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Choose Your <span className="text-yellow-400">Empire Plan</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              From free trials to enterprise deployments. Scale your AI-powered
              business with principled technology that grows with you.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span
                className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}
              >
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-yellow-400"
              />
              <span
                className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}
              >
                Yearly
              </span>
              <Badge
                variant="outline"
                className="ml-2 bg-green-500/10 text-green-400 border-green-500/40"
              >
                Save 10%
              </Badge>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  tier.popular
                    ? "scale-105 border-yellow-400/50"
                    : "border-gray-600/50 hover:border-yellow-400/30"
                }`}
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: tier.popular
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.6)",
                  boxShadow: tier.popular
                    ? "rgba(250, 204, 21, 0.4) 0px 25px 50px -12px"
                    : "none",
                }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <Badge className={tier.badgeColor}>{tier.badge}</Badge>
                  </div>

                  <CardTitle className="text-2xl font-light text-white mb-2">
                    {tier.name}
                  </CardTitle>

                  <p className="text-gray-300 text-sm mb-6 font-light">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-light text-white">
                        ${tier.price[isYearly ? "yearly" : "monthly"]}
                      </span>
                      <span className="text-gray-400">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                    {isYearly && tier.price.monthly > 0 && (
                      <p className="text-sm text-gray-400 mt-2">
                        ${Math.round(tier.price.yearly / 12)}/month billed
                        yearly
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {tier.limitations.length > 0 && (
                    <div className="border-t border-gray-600/50 pt-4">
                      <p className="text-xs text-gray-400 mb-2">Limitations:</p>
                      <div className="space-y-2">
                        {tier.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-gray-500/30 flex-shrink-0"></div>
                            <span className="text-xs text-gray-400">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleUpgrade(tier.id)}
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium hover:opacity-90"
                        : tier.id === "custom"
                          ? "bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/30"
                          : "bg-gray-700/60 border border-gray-600/40 text-gray-200 hover:bg-gray-700/80"
                    } py-3 rounded-xl transition-all duration-300`}
                    style={
                      tier.popular
                        ? {
                            boxShadow:
                              "rgba(250, 204, 21, 0.4) 0px 15px 35px -12px",
                          }
                        : {}
                    }
                  >
                    {tier.cta}
                    {tier.id !== "custom" && (
                      <ArrowRight className="w-4 h-4 ml-2" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-20 text-center">
            <Card
              className="max-w-4xl mx-auto border-yellow-400/30"
              style={{
                backdropFilter: "blur(24px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-2xl font-light text-white">
                    Need Something Custom?
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                  Enterprise deployments, custom integrations, and white-label
                  solutions available. Our team will work with you to build the
                  perfect AI solution for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleUpgrade("custom")}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium hover:opacity-90 px-8 py-3 rounded-xl"
                    style={{
                      boxShadow: "rgba(250, 204, 21, 0.4) 0px 15px 35px -12px",
                    }}
                  >
                    Contact Sales Team
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600/40 text-gray-300 hover:bg-gray-700/30 px-8 py-3 rounded-xl"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white text-center mb-8 tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card
                className="border-gray-600/50"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <CardContent className="p-6">
                  <h4 className="font-medium text-white mb-2">
                    Can I change plans anytime?
                  </h4>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes take effect immediately, and billing is prorated.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="border-gray-600/50"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <CardContent className="p-6">
                  <h4 className="font-medium text-white mb-2">
                    What makes SaintVision different?
                  </h4>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Our dual AI system (GPT-4o + Azure) with faith-aligned
                    responses ensures principled guidance for your business
                    decisions.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="border-gray-600/50"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <CardContent className="p-6">
                  <h4 className="font-medium text-white mb-2">
                    Is there a free trial?
                  </h4>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Yes! Start with our 7-day free trial that includes 2 AI
                    conversations to experience the platform.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="border-gray-600/50"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <CardContent className="p-6">
                  <h4 className="font-medium text-white mb-2">
                    Do you offer refunds?
                  </h4>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    We offer a 30-day money-back guarantee for all paid plans.
                    No questions asked.
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
