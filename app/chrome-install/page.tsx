import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chrome, Download, Settings, Zap } from "lucide-react";

export default function ChromeInstallPage() {
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
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Chrome className="w-16 h-16 text-primary" />
              <h1 className="text-5xl font-bold text-primary">
                Chrome Extension
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Install the SAINTSAL™ Chrome Extension for seamless AI assistance
              across the web
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-8 mb-16">
            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Download className="w-8 h-8 text-primary" />
                  Step 1: Download Extension
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Download the official SAINTSAL™ Chrome Extension from the
                      Chrome Web Store or install directly from our secure
                      servers.
                    </p>
                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Chrome className="w-4 h-4 mr-2" />
                        Chrome Web Store
                      </Button>
                      <Button variant="outline">Direct Download</Button>
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-6 text-center">
                    <Chrome className="w-16 h-16 text-primary mx-auto mb-4" />
                    <Badge className="bg-green-500/20 text-green-400">
                      Verified Extension
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Settings className="w-8 h-8 text-primary" />
                  Step 2: Configure Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Connect the extension to your SAINTSAL™ account and
                      configure your AI preferences for optimal performance.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        API Key Configuration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Response Preferences
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Hotkey Setup
                      </li>
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Status</span>
                        <Badge className="bg-green-500/20 text-green-400">
                          Connected
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Model</span>
                        <span className="text-sm text-primary">GPT-4o</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Hotkey</span>
                        <span className="text-sm text-primary">
                          Ctrl+Shift+S
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  Step 3: Start Using
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Once installed, you can access SAINTSAL™ AI on any
                      website using the hotkey or extension icon.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm">
                          Quick AI assistance on any webpage
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                        <Chrome className="w-5 h-5 text-primary" />
                        <span className="text-sm">
                          Seamless integration with browsing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-sm font-medium mb-2">Ready to Launch</p>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Test Extension
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Extension Features
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Instant AI Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Access SAINTSAL™ AI from any webpage with a simple hotkey
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Smart Context</h4>
                  <p className="text-sm text-muted-foreground">
                    AI understands the current page context for better responses
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Chrome className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Secure & Private</h4>
                  <p className="text-sm text-muted-foreground">
                    All communications encrypted with enterprise-grade security
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
