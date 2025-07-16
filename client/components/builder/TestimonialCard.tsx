// SAINTSAL™ Dynamic Testimonial Card for Builder.io
import React from "react";
import { Builder } from "@builder.io/react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote?: string;
  author?: string;
  title?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote = "SAINTSAL™ has revolutionized our business operations. The AI is incredibly intuitive and truly feels like having a divine advisor.",
  author = "Sarah Johnson",
  title = "CEO",
  company = "TechCorp",
  avatar = "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
  rating = 5,
}) => {
  return (
    <Card className="elite-card p-6 space-y-4">
      <CardContent className="space-y-4 p-0">
        {/* Rating Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < rating ? "text-primary" : "text-muted-foreground"
              }`}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-foreground text-lg italic">
          "{quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-foreground">{author}</div>
            <div className="text-sm text-muted-foreground">
              {title} at {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Register with Builder.io
Builder.registerComponent(TestimonialCard, {
  name: "SAINTSAL Testimonial Card",
  inputs: [
    {
      name: "quote",
      type: "longText",
      defaultValue:
        "SAINTSAL™ has revolutionized our business operations. The AI is incredibly intuitive and truly feels like having a divine advisor.",
      helperText: "Customer testimonial quote",
    },
    {
      name: "author",
      type: "text",
      defaultValue: "Sarah Johnson",
      helperText: "Customer name",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "CEO",
      helperText: "Customer job title",
    },
    {
      name: "company",
      type: "text",
      defaultValue: "TechCorp",
      helperText: "Customer company",
    },
    {
      name: "avatar",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
      helperText: "Customer photo/avatar",
    },
    {
      name: "rating",
      type: "number",
      defaultValue: 5,
      min: 1,
      max: 5,
      helperText: "Star rating (1-5)",
    },
  ],
});

export default TestimonialCard;
