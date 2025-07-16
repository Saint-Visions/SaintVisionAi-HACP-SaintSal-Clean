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
          className="absolute top-1/5 left-1/6 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-300/80 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 15px rgba(253, 224, 71, 0.5), 0 0 30px rgba(253, 224, 71, 0.3)",
            filter: "blur(0.3px)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-400/70 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 18px rgba(245, 158, 11, 0.4), 0 0 35px rgba(245, 158, 11, 0.2)",
            filter: "blur(0.4px)",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Crown className="w-16 h-16 text-yellow-400" />
              <h1 className="text-5xl font-thin tracking-tight text-yellow-400">
                Upgrade Your Plan
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
              Unlock the full power of SAINTSAL™ with advanced features and
              enterprise capabilities
            </p>
          </div>

          {/* Current Plan */}
          <div
            className="mb-12 bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl"
            style={{
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="p-8 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-white">
                Current Plan
              </h3>
              <div className="bg-yellow-400/20 text-yellow-400 mb-4 px-4 py-1 rounded-full inline-block text-sm font-medium">
                Unlimited - $27/month
              </div>
              <p className="text-gray-300">
                You're currently on the Unlimited plan with basic AI features
              </p>
            </div>
          </div>

          {/* Upgrade Options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* PartnerTech Pro */}
            <div
              className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-400/30 backdrop-blur-md rounded-3xl"
              style={{
                boxShadow:
                  "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-thin tracking-tight text-green-400">
                  PartnerTech Pro
                </h2>
                <div className="text-4xl font-light text-green-400 mb-2">
                  $97
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">
                  Advanced CRM and automation tools
                </p>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-200">
                      Everything in Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-200">
                      Advanced CRM Integration
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-200">
                      Chrome Extension Pro
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-200">
                      AI Workflow Triggers
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-200">
                      Priority Support
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-200">
                  Upgrade to Pro
                </Button>
              </div>
            </div>

            {/* Enterprise */}
            <div
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-400/30 backdrop-blur-md rounded-3xl relative scale-105"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-thin tracking-tight text-purple-400">
                  Enterprise
                </h2>
                <div className="text-4xl font-light text-purple-400 mb-2">
                  $497
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">
                  Full enterprise suite with admin controls
                </p>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">
                      Everything in PartnerTech Pro
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">
                      Admin Dashboard
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">
                      Team Management
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">
                      Advanced Security Controls
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">
                      24/7 Phone Support
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">
                      White-label Options
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:from-purple-400 hover:to-purple-300 font-medium transition-all duration-200">
                  Upgrade to Enterprise
                </Button>
              </div>
            </div>
          </div>

          {/* Why Upgrade */}
          <div
            className="bg-gray-900/40 border border-yellow-400/30 backdrop-blur-md rounded-3xl"
            style={{
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-thin tracking-tight text-yellow-400 text-center mb-8">
                Why Upgrade?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="font-medium mb-2 text-yellow-400">
                    Advanced CRM
                  </h4>
                  <p className="text-sm text-gray-300">
                    Seamless integration with GoHighLevel and other CRM
                    platforms
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="font-medium mb-2 text-yellow-400">
                    AI Automation
                  </h4>
                  <p className="text-sm text-gray-300">
                    Intelligent workflows that learn and adapt to your business
                  </p>
                </div>
                <div className="text-center">
                  <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="font-medium mb-2 text-yellow-400">
                    Enterprise Features
                  </h4>
                  <p className="text-sm text-gray-300">
                    Team management, admin controls, and enterprise security
                  </p>
                </div>
              </div>
            </div>
          </div>

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
