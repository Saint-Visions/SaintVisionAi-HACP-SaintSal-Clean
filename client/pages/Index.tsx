import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Wrench, Zap, Shield } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle content overlay to enhance readability - reduced to show your beautiful background */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div
          className="flex-1 flex items-center justify-center p-6 parallax"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f?format=webp&width=1920)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "120%",
            backgroundAttachment: "fixed",
            transform: "translateZ(0)",
          }}
        >
          <div className="max-w-md w-full space-y-6">
            {/* Quote Bubble */}
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/40 relative">
              <div className="text-center">
                <p className="text-yellow-400 text-lg font-medium mb-1">
                  "SaintSal" AI doesn't just answer.
                </p>
                <p className="text-yellow-400 text-lg font-medium mb-1">
                  It adapts. It empowers. It becomes your...
                </p>
                <p className="text-yellow-400 text-2xl font-bold">
                  GOTTA GUY™!
                </p>
              </div>
              {/* Speech bubble tail */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
              </div>
            </div>

            {/* Logo and Branding */}
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 text-center space-y-4">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="w-20 h-20 rounded-xl shadow-lg"
                />
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  SAINTSAL™
                </div>
                <div className="text-sm text-yellow-400">Cookin Knowledge</div>
              </div>
              <div className="text-4xl font-bold text-yellow-400">
                SaintVisionAI™
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  onClick={() => (window.location.href = "/signup")}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl text-lg"
                >
                  🔥 Start Cooking
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => (window.location.href = "/console")}
                    variant="outline"
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-blue-900/50"
                  >
                    💬 AI Chat
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/login")}
                    variant="outline"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500/10 bg-green-900/50"
                  >
                    📱 Sign In
                  </Button>
                </div>
              </div>

              {/* Quick Access */}
              <div className="pt-4">
                <div className="text-yellow-400 text-sm font-medium mb-2">
                  Quick Access:
                </div>
                <div className="flex justify-center space-x-4 text-xs">
                  <button
                    onClick={() => (window.location.href = "/pricing")}
                    className="text-red-400 hover:text-red-300"
                  >
                    🚨 Pricing
                  </button>
                  <button
                    onClick={() => (window.location.href = "/setup")}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    🛠️ Setup
                  </button>
                  <button
                    onClick={() => (window.location.href = "/help")}
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    📖 Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Inside These Walls */}
        <div className="p-6" style={{ backgroundColor: "#10161C" }}>
          <div className="relative max-w-7xl mx-auto">
            {/* Subtle gold shimmer edge effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 blur-xl"></div>

            <div className="relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-yellow-400 text-3xl font-bold mb-3">
                  ✨ What's Inside These Walls
                </h2>
                <p className="text-gray-300 text-sm">
                  Divine AI technology meets faith-aligned control
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Dual-AI Console */}
                <Card className="bg-black/30 backdrop-blur-xl border border-yellow-400/30 shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-yellow-400/20">
                        <Brain className="w-6 h-6 text-yellow-400" />
                      </div>
                      <CardTitle className="text-yellow-400 text-lg font-bold">
                        🧠 Dual-AI Console
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      GPT-4o + Azure chat in perfect sync
                    </p>
                  </CardContent>
                </Card>

                {/* PartnerTech Suite */}
                <Card className="bg-black/30 backdrop-blur-xl border border-yellow-400/30 shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-blue-400/20">
                        <Wrench className="w-6 h-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-blue-400 text-lg font-bold">
                        🛠️ PartnerTech Suite
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      CRM, outreach, Chrome tools
                    </p>
                  </CardContent>
                </Card>

                {/* Intelligent Routing */}
                <Card className="bg-black/30 backdrop-blur-xl border border-yellow-400/30 shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-purple-400/20">
                        <Zap className="w-6 h-6 text-purple-400" />
                      </div>
                      <CardTitle className="text-purple-400 text-lg font-bold">
                        🎛️ Intelligent Routing
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Smart flows, lead scoring, automation
                    </p>
                  </CardContent>
                </Card>

                {/* Privacy + Control */}
                <Card className="bg-black/30 backdrop-blur-xl border border-yellow-400/30 shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-green-400/20">
                        <Shield className="w-6 h-6 text-green-400" />
                      </div>
                      <CardTitle className="text-green-400 text-lg font-bold">
                        🔐 Privacy + Control
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Faith-aligned data & user control
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Elite AI Sanctuary Footer */}
        <footer className="p-6 text-center">
          <div className="space-y-2">
            <div className="text-yellow-400 font-bold text-lg">
              ✨ Elite AI Sanctuary • Ready for Saints
            </div>
            <div className="text-gray-400 text-sm">
              Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
