// SAINTSAL™ Dynamic Feature Grid for Builder.io
import React from "react";
import { Builder } from "@builder.io/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  columns?: number;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  title = "Divine AI Features",
  subtitle = "Unlock the power of SAINTSAL™ with these incredible capabilities",
  features = [
    {
      icon: "🧠",
      title: "Dual AI System",
      description:
        "GPT-4 + Azure AI working in perfect harmony for divine insights",
    },
    {
      icon: "💼",
      title: "CRM Integration",
      description:
        "Seamlessly connect with GoHighLevel and manage your clients",
    },
    {
      icon: "⚡",
      title: "Real-time Analytics",
      description: "Track performance and optimize your business in real-time",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption",
    },
  ],
  columns = 2,
}) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

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

        {/* Features Grid */}
        <div
          className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-8`}
        >
          {features.map((feature, index) => (
            <Card key={index} className="elite-card text-center">
              <CardHeader className="space-y-4">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-16 h-16 mx-auto rounded-lg"
                  />
                ) : (
                  <div className="text-4xl mx-auto">{feature.icon}</div>
                )}
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Register with Builder.io
Builder.registerComponent(FeatureGrid, {
  name: "SAINTSAL Feature Grid",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Divine AI Features",
      helperText: "Section title",
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue:
        "Unlock the power of SAINTSAL™ with these incredible capabilities",
      helperText: "Section subtitle",
    },
    {
      name: "features",
      type: "list",
      subFields: [
        { name: "icon", type: "text", helperText: "Emoji or icon" },
        { name: "title", type: "text" },
        { name: "description", type: "longText" },
        {
          name: "image",
          type: "file",
          helperText: "Optional image instead of icon",
        },
      ],
      defaultValue: [
        {
          icon: "🧠",
          title: "Dual AI System",
          description:
            "GPT-4 + Azure AI working in perfect harmony for divine insights",
        },
        {
          icon: "💼",
          title: "CRM Integration",
          description:
            "Seamlessly connect with GoHighLevel and manage your clients",
        },
      ],
      helperText: "List of features to display",
    },
    {
      name: "columns",
      type: "number",
      defaultValue: 2,
      min: 1,
      max: 4,
      helperText: "Number of columns (1-4)",
    },
  ],
});

export default FeatureGrid;
