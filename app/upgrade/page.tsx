import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Zap, Building2, CheckCircle } from "lucide-react";

export default function UpgradePage() {
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
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Crown className="w-16 h-16 text-primary" />
              <h1 className="text-5xl font-bold text-primary">
                Upgrade Your Plan
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the full power of SAINTSAL™ with advanced features and
              enterprise capabilities
            </p>
          </div>

          {/* Current Plan */}
          <Card className="mb-12 bg-muted/20 border-muted/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
              <Badge className="bg-primary/20 text-primary mb-4">
                Unlimited - $27/month
              </Badge>
              <p className="text-muted-foreground">
                You're currently on the Unlimited plan with basic AI features
              </p>
            </CardContent>
          </Card>

          {/* Upgrade Options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* PartnerTech Pro */}
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-green-400">
                  PartnerTech Pro
                </CardTitle>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  $97
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Advanced CRM and automation tools
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Everything in Unlimited</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Advanced CRM Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Chrome Extension Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">AI Workflow Triggers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-purple-400">
                  Enterprise
                </CardTitle>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  $497
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Full enterprise suite with admin controls
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">
                      Everything in PartnerTech Pro
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">Admin Dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">Team Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">Advanced Security Controls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">24/7 Phone Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">White-label Options</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  Upgrade to Enterprise
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Why Upgrade */}
          <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Why Upgrade?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Advanced CRM</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration with GoHighLevel and other CRM
                    platforms
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">AI Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent workflows that learn and adapt to your business
                  </p>
                </div>
                <div className="text-center">
                  <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Enterprise Features</h4>
                  <p className="text-sm text-muted-foreground">
                    Team management, admin controls, and enterprise security
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need help choosing the right plan?
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/pricing">
                <Button variant="outline">Compare All Plans</Button>
              </Link>
              <Button className="bg-primary hover:bg-primary/90">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
