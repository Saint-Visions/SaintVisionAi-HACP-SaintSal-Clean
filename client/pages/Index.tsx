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

        {/* Native Features Overlay */}
        <div className="relative py-32 overflow-hidden bg-gradient-to-b from-black/90 to-black/60">
          {/* Subtle golden shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/3 to-transparent animate-pulse"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-8">
            {/* Native Header */}
            <div className="text-center mb-20">
              <div className="text-yellow-400/60 text-sm font-light tracking-[0.2em] uppercase mb-6">
                Elite Technology
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
                Enterprise Intelligence
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto"></div>
            </div>

            {/* Native Feature Flow */}
            <div className="space-y-24">
              {/* Dual-AI Engine */}
              <div className="flex items-center space-x-12 md:space-x-20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    Dual-AI Engine
                  </h3>
                  <p className="text-gray-300 text-lg font-light leading-relaxed">
                    GPT-4o and Azure Cognitive Services in perfect
                    synchronization. Redundant intelligence ensures zero
                    downtime, maximum reliability.
                  </p>
                  <div className="flex items-center mt-4 text-yellow-400/70 text-sm font-light">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    Live • 99.9% Uptime Guaranteed
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>

              {/* PartnerTech Suite */}
              <div className="flex items-center space-x-12 md:space-x-20">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    PartnerTech Suite
                  </h3>
                  <p className="text-gray-300 text-lg font-light leading-relaxed">
                    Advanced CRM, automated outreach, Chrome extensions. Unlock
                    when you're ready to scale beyond individual use.
                  </p>
                  <div className="flex items-center mt-4 text-blue-400/70 text-sm font-light">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Partner Access • Premium Tier
                  </div>
                </div>
                <div className="flex-shrink-0 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>

              {/* Intelligence Layer */}
              <div className="flex items-center space-x-12 md:space-x-20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    Adaptive Intelligence
                  </h3>
                  <p className="text-gray-300 text-lg font-light leading-relaxed">
                    Machine learning algorithms that evolve with your workflow.
                    Smarter responses through continuous optimization.
                  </p>
                  <div className="flex items-center mt-4 text-purple-400/70 text-sm font-light">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                    Learning • Continuously Improving
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>

              {/* Faith-Aligned Security */}
              <div className="flex items-center space-x-12 md:space-x-20">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    Faith-Aligned Privacy
                  </h3>
                  <p className="text-gray-300 text-lg font-light leading-relaxed">
                    Your conversations stay private. Your values stay intact.
                    Built with ethical AI principles at the foundation.
                  </p>
                  <div className="flex items-center mt-4 text-green-400/70 text-sm font-light">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Encrypted • Values-First Design
                  </div>
                </div>
                <div className="flex-shrink-0 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="text-center mt-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mx-auto"></div>
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
