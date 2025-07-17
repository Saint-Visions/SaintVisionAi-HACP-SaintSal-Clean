import React, { useState } from "react";
import BuilderPage from "../components/BuilderPage";
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
import { getPricingTiers } from "../lib/stripe";
import { useAuth } from "../contexts/AuthContext";
import { redirectToCheckout } from "../lib/stripe";

// Fallback pricing component
const FallbackPricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { user } = useAuth();

  const pricingTiers = getPricingTiers();

  const handleUpgrade = async (tier: any) => {
    if (!user) {
      // Redirect to signup if not logged in
      window.location.href = "/signup";
      return;
    }

    if (tier.id === "free_trial") {
      // Already free
      return;
    }

    try {
      await redirectToCheckout(tier.priceId, user.id, user.email!);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const getBadgeColor = (tier: any) => {
    switch (tier.tier) {
      case "free_trial":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "unlimited":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40";
      case "coretools":
        return "bg-green-500/20 text-green-400 border-green-500/40";
      case "pro":
        return "bg-purple-500/20 text-purple-400 border-purple-500/40";
      case "partnertech":
        return "bg-orange-500/20 text-orange-400 border-orange-500/40";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/40";
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
                    <Badge className={getBadgeColor(tier)}>
                      {tier.popular ? "Most Popular" : tier.name}
                    </Badge>
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
                        ${tier.price}
                      </span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    {tier.description && (
                      <p className="text-sm text-gray-400 mt-2">
                        {tier.description}
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

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleUpgrade(tier)}
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium hover:opacity-90"
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
                    {tier.price === 0 ? "Start Free" : `Get ${tier.name}`}
                    <ArrowRight className="w-4 h-4 ml-2" />
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
};

export default function Pricing() {
  return (
    <BuilderPage
      model="page"
      chatMode="admin"
      showHeader={true}
      showFooter={true}
      fallback={<FallbackPricing />}
    />
  );
}
