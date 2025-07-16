import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChromeInstall() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful SAINTSAL Entrance Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fe0bfd59dd0ee47e5859b1510493a0cfd?format=webp&width=1920)",
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full space-y-8">
          {/* Welcome Message */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative text-center">
            <p className="text-yellow-400 text-2xl font-medium mb-2">
              Bring SAINTSAL™ to Every Browser Tab
            </p>
            <p className="text-yellow-400 text-lg font-medium mb-1">
              Install the divine Chrome extension and have your...
            </p>
            <p className="text-yellow-400 text-3xl font-bold">
              GOTTA GUY™ everywhere!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="elite-card text-center">
              <CardHeader>
                <div className="text-6xl mb-4">🌐</div>
                <CardTitle className="text-xl text-primary">Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-4">
                  Open Chrome Web Store
                </p>
                <p className="text-muted-foreground text-sm">
                  Visit the Chrome Web Store and search for "SAINTSAL™ AI
                  Assistant"
                </p>
              </CardContent>
            </Card>

            <Card className="elite-card text-center">
              <CardHeader>
                <div className="text-6xl mb-4">⬇️</div>
                <CardTitle className="text-xl text-primary">Step 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-4">
                  Install Extension
                </p>
                <p className="text-muted-foreground text-sm">
                  Click "Add to Chrome" and confirm the installation
                </p>
              </CardContent>
            </Card>

            <Card className="elite-card text-center">
              <CardHeader>
                <div className="text-6xl mb-4">🚀</div>
                <CardTitle className="text-xl text-primary">Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-4">
                  Start Cooking
                </p>
                <p className="text-muted-foreground text-sm">
                  Pin the extension and access divine AI from any webpage
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card className="elite-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Divine Browser Features
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    One-Click Access
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Access your divine AI assistant from any webpage with a
                    single click
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Secure Integration
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Your conversations stay private and secure across all
                    browser sessions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Context Aware
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    AI that understands the webpage you're viewing for better
                    assistance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🔄</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Sync Everywhere
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Your settings and conversations sync across all your devices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4">
            <Button
              size="lg"
              className="gold-shimmer px-8 py-4 text-lg font-bold"
              onClick={() =>
                window.open("https://chrome.google.com/webstore", "_blank")
              }
            >
              🌐 Install Chrome Extension
            </Button>
            <p className="text-muted-foreground">
              Already installed?{" "}
              <a href="/dashboard" className="text-primary hover:underline">
                Go to Dashboard
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
