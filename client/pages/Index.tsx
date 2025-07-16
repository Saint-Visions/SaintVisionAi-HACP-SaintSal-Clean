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

        {/* Premium Features Section */}
        <div
          className="relative py-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          }}
        >
          {/* Animated golden shimmer overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            {/* Premium Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
                <div className="text-yellow-400 text-sm font-medium tracking-widest uppercase">
                  Elite Technology Stack
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Enterprise-Grade AI
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Professional-grade intelligence for those who demand excellence
              </p>
            </div>

            {/* Premium Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dual-AI Engine */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30">
                      <Brain className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Dual-AI Engine
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        GPT-4o and Azure Cognitive Services working in perfect
                        harmony. Redundant intelligence, zero downtime.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-yellow-400/70 font-medium">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    ACTIVE • 99.9% UPTIME
                  </div>
                </div>
              </div>

              {/* PartnerTech Suite */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30">
                      <Wrench className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        PartnerTech Suite
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Advanced CRM, automated outreach, and Chrome extension
                        tools. For partners ready to scale.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-blue-400/70 font-medium">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    PARTNER ACCESS REQUIRED
                  </div>
                </div>
              </div>

              {/* Intelligence Layer */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30">
                      <Zap className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Intelligence Layer
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Adaptive learning algorithms that understand your
                        workflow and optimize responses in real-time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-purple-400/70 font-medium">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                    LEARNING • IMPROVING
                  </div>
                </div>
              </div>

              {/* Faith-Aligned Security */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-green-400/30 transition-all duration-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30">
                      <Shield className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Faith-Aligned Security
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Your data stays private. Your values stay intact. Zero
                        compromise on ethics or security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-green-400/70 font-medium">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    ENCRYPTED • PRIVATE
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
                <span>Enterprise ready</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Scalable architecture</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>24/7 availability</span>
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
