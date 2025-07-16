import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, MessageCircle, Settings } from "lucide-react";

export default function ConsolePage() {
  return (
    <WorkspaceLayout>
      <div className="min-h-screen relative overflow-hidden charcoal-depth">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8155e04eb6064174a0cb82e2eecf77b6')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Brain className="w-12 h-12 text-primary" />
              <h1 className="text-4xl font-bold text-primary">AI Console</h1>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                Live
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Dual AI Engine • GPT-4o + Azure Cognitive Services
            </p>
          </div>

          {/* Dual AI Interface */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* GPT-4o Engine */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-400">
                  <Brain className="w-6 h-6" />
                  GPT-4o Engine
                  <Badge className="bg-blue-500/20 text-blue-400">
                    Primary
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4 min-h-[400px] border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">
                        Ready for input
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      Type your message to start chatting with GPT-4o...
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask GPT-4o anything..."
                      className="flex-1 px-3 py-2 bg-background border border-blue-500/30 rounded-lg text-foreground"
                    />
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Azure Cognitive Engine */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-400">
                  <Zap className="w-6 h-6" />
                  Azure Cognitive
                  <Badge className="bg-purple-500/20 text-purple-400">
                    Validator
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4 min-h-[400px] border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">
                        Cross-validation active
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      Azure will validate and enhance responses...
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Azure cognitive input..."
                      className="flex-1 px-3 py-2 bg-background border border-purple-500/30 rounded-lg text-foreground"
                    />
                    <Button className="bg-purple-500 hover:bg-purple-600">
                      <Zap className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unified Output */}
          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-400">
                <Brain className="w-6 h-6" />
                Unified AI Response
                <Badge className="bg-green-500/20 text-green-400">
                  Verified
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 rounded-lg p-6 min-h-[200px] border border-green-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Waiting for dual-engine processing
                  </span>
                </div>
                <div className="text-sm text-muted-foreground italic">
                  Combined and verified responses will appear here...
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background/50 border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">System Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>GPT-4o:</span>
                    <span className="text-green-400">Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Azure:</span>
                    <span className="text-green-400">Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Latency:</span>
                    <span className="text-primary">1.2s</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Session Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Messages:</span>
                    <span className="text-blue-400">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tokens:</span>
                    <span className="text-blue-400">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uptime:</span>
                    <span className="text-primary">99.9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Quick Settings</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Model Settings
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Export Chat
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Clear History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
