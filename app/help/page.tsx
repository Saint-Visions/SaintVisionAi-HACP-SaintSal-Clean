import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MessageCircle,
  Book,
  Video,
  Mail,
  Phone,
} from "lucide-react";

const helpCategories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of SAINTSAL™",
    articles: 12,
  },
  {
    icon: MessageCircle,
    title: "AI Console",
    description: "Master the dual AI chat interface",
    articles: 8,
  },
  {
    icon: Video,
    title: "Chrome Extension",
    description: "Install and configure browser tools",
    articles: 6,
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: 15,
  },
];

export default function HelpPage() {
  return (
    <div
      className="min-h-screen relative parallax parallax-bg"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Ff67beb60174e484092cc99d8a2e9517d?format=webp&width=800)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced Divine Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50 z-1" />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 gold-particles z-2" />

      <div className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <HelpCircle className="w-16 h-16 text-primary" />
              <h1 className="text-5xl font-bold text-primary">Help Center</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help with SAINTSAL™ features, setup, and troubleshooting
            </p>
          </div>

          {/* Quick Contact */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help via email
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Call for immediate help
                </p>
                <Badge className="bg-green-500/20 text-green-400">
                  Pro+ Only
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {helpCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-background/50 border-primary/30 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <Badge className="ml-auto">{category.articles}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Browse Articles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <Card className="mb-16 bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Popular Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">
                      How to set up your AI preferences
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Configure GPT-4o and Azure settings
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Installing Chrome Extension</h4>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step installation guide
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">
                      Understanding HACP™ Technology
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Learn about dual-brain AI architecture
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">CRM Integration Setup</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect GoHighLevel and other CRMs
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">
                    What makes SAINTSAL™ different?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our HACP™ dual-brain architecture combines GPT-4o and Azure
                    Cognitive Services for unprecedented accuracy and
                    reliability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Can I cancel my subscription?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Yes, you can cancel anytime. Your access continues until the
                    end of your billing period.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Is my data secure and private?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Absolutely. We use enterprise-grade AES-256 encryption and
                    are SOC 2 compliant with faith-aligned data policies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    How do I upgrade my plan?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    You can upgrade anytime from your dashboard. Changes take
                    effect immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
