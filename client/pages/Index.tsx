import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Wrench, Zap, Shield, Users, CheckCircle } from "lucide-react";

export default function Index() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/48bf7ae07524f3ab5cd7dbd41650b41a12d29df9?width=1920)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced translucent overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* All content flows over the same background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
          {/* Divine Quote */}
          <div className="mb-12 max-w-2xl">
            <p className="text-yellow-400 text-2xl md:text-3xl font-light mb-3 tracking-wide">
              "SaintSal" AI doesn't just answer.
            </p>
            <p className="text-yellow-400 text-2xl md:text-3xl font-light mb-3 tracking-wide">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-4xl md:text-5xl font-bold tracking-wider">
              GOTTA GUY™!
            </p>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL™ Circuit Board Logo"
              className="w-28 h-28 rounded-2xl mx-auto shadow-2xl shadow-yellow-400/20"
            />
          </div>

          {/* Branding */}
          <div className="mb-6">
            <div className="text-white text-lg font-light uppercase tracking-[0.4em] mb-2">
              SAINTSAL™
            </div>
            <div className="text-yellow-400 text-2xl font-medium tracking-wide">
              Cookin' Knowledge
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-extralight text-yellow-400 mb-12 tracking-tight">
            SaintVisionAI™
          </h1>

          {/* Primary CTA */}
          <div className="mb-8">
            <Button
              onClick={() =>
                document
                  .getElementById("dual-ai-console")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-12 py-5 rounded-2xl text-2xl shadow-2xl shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
            >
              🔥 Start Cooking
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button
              onClick={() => (window.location.href = "/console")}
              className="bg-blue-600/30 border border-blue-400/60 text-blue-200 hover:bg-blue-600/50 hover:text-white backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 text-lg"
            >
              💬 AI Chat
            </Button>
            <Button
              onClick={() => (window.location.href = "/login")}
              className="bg-green-600/30 border border-green-400/60 text-green-200 hover:bg-green-600/50 hover:text-white backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 text-lg"
            >
              📱 Sign In
            </Button>
          </div>

          {/* Quick Access */}
          <div className="text-yellow-400/60 text-sm font-light mb-3 tracking-wide">
            Quick Access
          </div>
          <div className="flex justify-center space-x-8 text-lg">
            <button
              onClick={() => (window.location.href = "/pricing")}
              className="text-red-400 hover:text-red-300 font-light transition-colors hover:scale-110 duration-300"
            >
              🚨 Pricing
            </button>
            <button
              onClick={() => (window.location.href = "/setup")}
              className="text-blue-400 hover:text-blue-300 font-light transition-colors hover:scale-110 duration-300"
            >
              🛠️ Setup
            </button>
            <button
              onClick={() => (window.location.href = "/help")}
              className="text-yellow-400 hover:text-yellow-300 font-light transition-colors hover:scale-110 duration-300"
            >
              📖 Help
            </button>
          </div>
        </section>

        {/* Elite Technology Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-yellow-400/60 text-sm font-light tracking-[0.3em] uppercase mb-4">
              Elite Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Enterprise Intelligence
            </h2>
            <p className="text-gray-300 text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Professional-grade AI infrastructure with dual-engine redundancy,
              faith-aligned privacy, and enterprise-scale reliability.
            </p>
          </div>
        </section>

        {/* Dual AI Console Section */}
        <section id="dual-ai-console" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 mr-4">
                    <Brain className="w-8 h-8 text-yellow-400" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-400/20 border border-green-400/30 text-green-400 text-xs font-medium animate-pulse">
                    Live Agent Enabled
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Dual AI Console
                </h3>

                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                  <strong className="text-yellow-400">
                    GPT-4o + Azure Cognitive Services
                  </strong>{" "}
                  working in perfect synchronization. Real-time cognition with
                  24/7 service reliability. Zero hallucinations through
                  dual-validation architecture.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time dual-engine processing
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    99.9% uptime guarantee
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Enterprise-grade security
                  </div>
                </div>

                <Button
                  onClick={() => (window.location.href = "/console")}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
                >
                  Try Dual Chat Mode
                </Button>
              </div>

              {/* AI Console Mockup */}
              <div className="relative">
                <div className="bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      SaintVisionAI Console
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-3">
                      <div className="text-blue-300 text-sm mb-1">
                        GPT-4o Engine
                      </div>
                      <div className="text-white text-xs">
                        Processing natural language...
                      </div>
                    </div>

                    <div className="bg-purple-600/20 border border-purple-400/30 rounded-lg p-3">
                      <div className="text-purple-300 text-sm mb-1">
                        Azure Cognitive
                      </div>
                      <div className="text-white text-xs">
                        Cross-validating response...
                      </div>
                    </div>

                    <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-3">
                      <div className="text-green-300 text-sm mb-1">
                        Unified Output
                      </div>
                      <div className="text-white text-xs">
                        ✓ Verified response ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PartnerTech Elite Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="order-2 md:order-1">
                <div className="bg-black/60 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-semibold text-white">
                      PartnerTech Suite
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 text-xs font-medium">
                      Premium Tier
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-sm">CRM</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Wrench className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-sm">Chrome</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-sm">Triggers</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Brain className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-sm">AI Logic</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 mr-4">
                    <Wrench className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                  PartnerTech Elite
                </h3>

                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                  <strong className="text-blue-400">
                    When you're ready to scale.
                  </strong>{" "}
                  Advanced CRM integration, Chrome extension automation,
                  AI-triggered workflows, and intelligent client routing
                  systems.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Enterprise CRM integration
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Chrome extension automation
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    AI workflow triggers
                  </div>
                </div>

                <Button
                  onClick={() => (window.location.href = "/upgrade")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
                >
                  Unlock Partner Access
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Faith-Aligned Vault Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 mr-4">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Faith-Aligned Vault
                </h3>

                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                  <strong className="text-green-400">
                    Secure. Private. Moral.
                  </strong>{" "}
                  Your conversations, billing data, and personal information
                  protected by enterprise-grade encryption with values-first
                  architecture.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    End-to-end encryption
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Secure Stripe billing
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Role-based authentication
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Faith-centered data policies
                  </div>
                </div>

                <Button
                  onClick={() => (window.location.href = "/privacy")}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
                >
                  Learn About Security
                </Button>
              </div>

              {/* Security Visual */}
              <div className="relative">
                <div className="bg-black/60 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8 shadow-2xl text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-green-400" />
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    Protected Data Vault
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Encryption Status</span>
                      <span className="text-green-400">AES-256 Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Data Location</span>
                      <span className="text-green-400">Private Cloud</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Access Control</span>
                      <span className="text-green-400">Role-Based</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Ethics Compliance</span>
                      <span className="text-green-400">Faith-Aligned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Movement Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12">
              <div className="text-yellow-400/60 text-sm font-light tracking-[0.3em] uppercase mb-4">
                The Movement
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Elite AI Sanctuary
              </h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed mb-8">
                Built for those who refuse to compromise on excellence, privacy,
                or values. Join thousands who've discovered their{" "}
                <strong className="text-yellow-400">GOTTA GUY™</strong>.
              </p>
            </div>

            {/* SAINTSAL Story */}
            <div className="bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-8 mb-12 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="w-16 h-16 rounded-xl border border-yellow-400/20"
                />
              </div>

              <div className="text-yellow-400 text-lg font-medium mb-4 tracking-wide">
                SAINTSAL™ • Cookin' Knowledge
              </div>

              <blockquote className="text-white text-xl font-light italic leading-relaxed">
                "We built this for the builders, the believers, the ones who
                demand more than chatbots. This is enterprise AI with a soul,
                technology with values, innovation with integrity."
              </blockquote>
            </div>

            {/* Final CTA */}
            <div className="space-y-6">
              <Button
                onClick={() => (window.location.href = "/signup")}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-12 py-4 rounded-2xl text-xl shadow-xl shadow-yellow-400/30 transition-all duration-300 hover:scale-105"
              >
                🚀 Join SAINTSAL™
              </Button>

              <div className="text-gray-400 text-sm font-light">
                Azure Cognitive Services • OpenAI GPT-4o • Premium
                Infrastructure
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
