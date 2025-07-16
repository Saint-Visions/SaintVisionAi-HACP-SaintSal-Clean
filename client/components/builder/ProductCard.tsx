// SAINTSAL™ Dynamic Product Card for Builder.io
import React from "react";
import { Builder } from "@builder.io/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name?: string;
  price?: string;
  description?: string;
  imageUrl?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  tier?: "free" | "unlimited" | "pro" | "custom";
  isPopular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name = "SAINTSAL™ AI Plan",
  price = "$27/month",
  description = "Divine AI assistance for your business",
  imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
  features = ["Unlimited AI Chat", "Priority Support", "Advanced Analytics"],
  ctaText = "Get Started",
  ctaLink = "/pricing",
  tier = "unlimited",
  isPopular = false,
}) => {
  const tierColors = {
    free: "bg-gray-500",
    unlimited: "bg-primary",
    pro: "bg-purple-600",
    custom: "bg-gradient-to-r from-primary to-orange-500",
  };

  return (
    <Card
      className={`elite-card relative ${isPopular ? "ring-2 ring-primary" : ""}`}
    >
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="w-16 h-16 rounded-lg shadow-lg"
          />
        </div>
        <div>
          <CardTitle className="text-xl font-bold text-foreground">
            {name}
          </CardTitle>
          <div
            className={`text-3xl font-bold mt-2 ${tierColors[tier]} bg-clip-text text-transparent`}
          >
            {price}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-center">{description}</p>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className="w-full gold-shimmer"
          onClick={() => (window.location.href = ctaLink)}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};

// Register with Builder.io
Builder.registerComponent(ProductCard, {
  name: "SAINTSAL Product Card",
  inputs: [
    {
      name: "name",
      type: "text",
      defaultValue: "SAINTSAL™ AI Plan",
      helperText: "Product/plan name",
    },
    {
      name: "price",
      type: "text",
      defaultValue: "$27/month",
      helperText: "Price display",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "Divine AI assistance for your business",
      helperText: "Product description",
    },
    {
      name: "imageUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
      helperText: "Product image/icon",
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "feature",
          type: "text",
        },
      ],
      defaultValue: [
        { feature: "Unlimited AI Chat" },
        { feature: "Priority Support" },
        { feature: "Advanced Analytics" },
      ],
      helperText: "List of product features",
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "Get Started",
      helperText: "Call-to-action button text",
    },
    {
      name: "ctaLink",
      type: "url",
      defaultValue: "/pricing",
      helperText: "Where the CTA button should link",
    },
    {
      name: "tier",
      type: "string",
      enum: ["free", "unlimited", "pro", "custom"],
      defaultValue: "unlimited",
      helperText: "Product tier for styling",
    },
    {
      name: "isPopular",
      type: "boolean",
      defaultValue: false,
      helperText: "Show 'Most Popular' badge",
    },
  ],
});

export default ProductCard;
