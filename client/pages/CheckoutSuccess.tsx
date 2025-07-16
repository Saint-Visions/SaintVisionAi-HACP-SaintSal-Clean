import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful SAINTSAL Entrance Background with celebration feel */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F390b1054c3ac4cf1829920118fd60db0?format=webp&width=1920)",
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)",
        }}
      />

      {/* Celebratory overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full space-y-8 text-center">
          {/* Success Message */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative">
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-yellow-400 text-2xl font-medium">
                Divine Power Unlocked!
              </p>
              <p className="text-yellow-400 text-lg font-medium">
                Your upgrade is complete. Welcome to the next level of...
              </p>
              <p className="text-yellow-400 text-3xl font-bold">
                GOTTA GUY™ Excellence!
              </p>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* Upgrade Confirmation */}
          <Card className="elite-card">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="w-24 h-24 rounded-xl shadow-lg"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Payment Successful! ✅
              </CardTitle>
              <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                Subscription Activated
              </Badge>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  What happens next?
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">
                      Your account has been upgraded instantly
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">
                      All premium features are now unlocked
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">
                      You'll receive a confirmation email shortly
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">
                      Billing starts on your next cycle
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full gold-shimmer py-4 text-lg font-bold"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  🚀 Enter Your Divine Dashboard
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => (window.location.href = "/settings")}
                  >
                    ⚙️ Configure Settings
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => (window.location.href = "/help")}
                  >
                    📖 Getting Started Guide
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">Need help getting started?</p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:support@saintvisional.com"
                className="text-primary hover:underline"
              >
                📧 Email Support
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/help" className="text-primary hover:underline">
                📚 Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
