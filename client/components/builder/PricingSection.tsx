// SAINTSAL™ Dynamic Pricing Section for Builder.io
import React from "react";
import { Builder } from "@builder.io/react";
import ProductCard from "./ProductCard";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  tier: "free" | "unlimited" | "pro" | "custom";
  isPopular: boolean;
  ctaText: string;
  ctaLink: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Choose Your Divine Plan",
  subtitle = "Unlock the power of SAINTSAL™ AI with our flexible pricing options",
  plans = [
    {
      name: "Companion",
      price: "$27/month",
      description: "Perfect for individuals getting started with AI",
      features: [
        "Unlimited AI Companion",
        "Basic Chat Support",
        "Mobile Access",
        "Community Support",
      ],
      tier: "unlimited",
      isPopular: false,
      ctaText: "Get Started",
      ctaLink: "/pricing?plan=companion",
    },
    {
      name: "PartnerTech",
      price: "$97/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Everything in Companion",
        "CRM Integration",
        "Priority Support",
        "Advanced Analytics",
        "Team Collaboration",
      ],
      tier: "pro",
      isPopular: true,
      ctaText: "Upgrade Now",
      ctaLink: "/pricing?plan=partner",
    },
    {
      name: "Pro Suite",
      price: "$297/month",
      description: "Complete solution for enterprises",
      features: [
        "Everything in PartnerTech",
        "White Label Solution",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Premium Support",
      ],
      tier: "custom",
      isPopular: false,
      ctaText: "Contact Sales",
      ctaLink: "/pricing?plan=pro",
    },
  ],
}) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ProductCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              tier={plan.tier}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include SAINTSAL™ core AI features. Upgrade or downgrade
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

// Register with Builder.io
Builder.registerComponent(PricingSection, {
  name: "SAINTSAL Pricing Section",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Choose Your Divine Plan",
      helperText: "Section title",
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue:
        "Unlock the power of SAINTSAL™ AI with our flexible pricing options",
      helperText: "Section subtitle/description",
    },
    {
      name: "plans",
      type: "list",
      subFields: [
        { name: "name", type: "text" },
        { name: "price", type: "text" },
        { name: "description", type: "text" },
        {
          name: "features",
          type: "list",
          subFields: [{ name: "feature", type: "text" }],
        },
        {
          name: "tier",
          type: "string",
          enum: ["free", "unlimited", "pro", "custom"],
        },
        { name: "isPopular", type: "boolean" },
        { name: "ctaText", type: "text" },
        { name: "ctaLink", type: "url" },
      ],
      helperText: "Pricing plans configuration",
    },
  ],
});

export default PricingSection;
