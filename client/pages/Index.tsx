import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Wrench, Zap, Shield } from "lucide-react";

export default function Index() {
  return (
    <div className="relative" style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    }}>

      {/* Section 1: Hero Parallax - Full Height */}
      <section className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f?format=webp&width=1920)",
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            transform: "translateZ(0)"
          }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md w-full space-y-6">

            {/* Divine Quote Bubble */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/50 relative shadow-2xl shadow-yellow-400/20">
              <div className="text-center">
                <p className="text-yellow-400 text-xl font-light mb-2 tracking-wide">
                  "SaintSal" AI doesn't just answer.
                </p>
                <p className="text-yellow-400 text-xl font-light mb-2 tracking-wide">
                  It adapts. It empowers. It becomes your...
                </p>
                <p className="text-yellow-400 text-3xl font-bold tracking-wider">
                  GOTTA GUY™!
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-6 border-r-6 border-t-12 border-l-transparent border-r-transparent border-t-yellow-400/50"></div>
              </div>
            </div>

            {/* Hero Command Center */}
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 text-center shadow-2xl">

              {/* Logo Section */}
              <div className="flex items-center justify-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="w-24 h-24 rounded-2xl shadow-xl border border-yellow-400/20"
                />
              </div>

              {/* Branding */}
              <div className="mb-6">
                <div className="text-gray-400 text-sm font-light uppercase tracking-[0.3em] mb-1">
                  SAINTSAL™
                </div>
                <div className="text-yellow-400 text-lg font-medium tracking-wide">
                  Cookin' Knowledge
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl font-light text-yellow-400 mb-8 tracking-tight">
                SaintVisionAI™
              </h1>

              {/* Primary CTA */}
              <Button
                onClick={() => document.getElementById('dual-ai-console')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-4 rounded-2xl text-xl mb-6 shadow-xl shadow-yellow-400/30 transition-all duration-300 hover:scale-105"
              >
                🔥 Start Cooking
              </Button>

              {/* Action Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  onClick={() => (window.location.href = "/console")}
                  className="bg-blue-600/20 border border-blue-400/50 text-blue-300 hover:bg-blue-600/30 hover:border-blue-400 backdrop-blur-sm py-3 rounded-xl transition-all duration-300"
                >
                  💬 AI Chat
                </Button>
                <Button
                  onClick={() => (window.location.href = "/login")}
                  className="bg-green-600/20 border border-green-400/50 text-green-300 hover:bg-green-600/30 hover:border-green-400 backdrop-blur-sm py-3 rounded-xl transition-all duration-300"
                >
                  📱 Sign In
                </Button>
              </div>

              {/* Quick Access */}
              <div className="pt-4 border-t border-yellow-400/20">
                <div className="text-yellow-400/70 text-sm font-light mb-3 tracking-wide">
                  Quick Access
                </div>
                <div className="flex justify-center space-x-6 text-sm">
                  <button
                    onClick={() => (window.location.href = "/pricing")}
                    className="text-red-400 hover:text-red-300 font-light transition-colors"
                  >
                    🚨 Pricing
                  </button>
                  <button
                    onClick={() => (window.location.href = "/setup")}
                    className="text-blue-400 hover:text-blue-300 font-light transition-colors"
                  >
                    🛠️ Setup
                  </button>
                  <button
                    onClick={() => (window.location.href = "/help")}
                    className="text-yellow-400 hover:text-yellow-300 font-light transition-colors"
                  >
                    📖 Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                                        {/* Crystal Glass Features - Professional Typography */}
        <div className="relative py-20 overflow-hidden" style={{
          backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f?format=webp&width=1920)",
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}>
          {/* Divine overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Professional Header */}
            <div className="text-center mb-16">
              <div className="text-yellow-400/60 text-sm font-medium tracking-widest uppercase mb-4" style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              }}>
                What's Inside These Walls
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight" style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              }}>
                Divine AI Technology
              </h2>
              <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto" style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              }}>
                Professional-grade intelligence for those who demand excellence
              </p>
            </div>

            {/* Crystal Glass Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

              {/* Dual AI Console */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-[#10161C]/70 border border-yellow-400/30 backdrop-blur-xl p-6 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30">
                      <Brain className="text-yellow-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-white" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      Dual AI Console
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      Azure + GPT-4o in perfect sync
                    </p>
                  </div>
                </div>
              </div>

              {/* PartnerTech Suite */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-[#10161C]/70 border border-yellow-400/30 backdrop-blur-xl p-6 hover:shadow-2xl hover:shadow-blue-400/20 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30">
                      <Wrench className="text-blue-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-white" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      PartnerTech Suite
                    </h3>
                    <p className="text-sm text-blue-300 leading-relaxed" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      CRM tools, Chrome extension, workflows
                    </p>
                  </div>
                </div>
              </div>

              {/* Intelligent Flows */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-[#10161C]/70 border border-yellow-400/30 backdrop-blur-xl p-6 hover:shadow-2xl hover:shadow-purple-400/20 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30">
                      <Zap className="text-purple-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-white" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      Intelligent Flows
                    </h3>
                    <p className="text-sm text-purple-300 leading-relaxed" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      Pipeline logic, lead scoring, voice AI
                    </p>
                  </div>
                </div>
              </div>

              {/* Faith-Aligned Vault */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-[#10161C]/70 border border-yellow-400/30 backdrop-blur-xl p-6 hover:shadow-2xl hover:shadow-green-400/20 hover:border-green-400 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30">
                      <Shield className="text-green-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-white" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      Faith-Aligned Vault
                    </h3>
                    <p className="text-sm text-green-300 leading-relaxed" style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    }}>
                      Private, secure, and principled
                    </p>
                  </div>
                </div>
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