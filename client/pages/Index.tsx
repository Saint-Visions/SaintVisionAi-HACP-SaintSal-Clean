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
          "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F67fa88f04d284db78a9ad420de29a1e7)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Professional Business Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/70 to-slate-900/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-slate-800/50 z-1" />

      {/* Subtle Business Glow */}
      <div className="absolute inset-0 z-2">
        <div
          className="absolute top-1/4 left-1/5 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)",
            filter: "blur(0.3px)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-400/50 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 12px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.1)",
            filter: "blur(0.2px)",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* All content flows over the same background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] relative p-8 pb-16">
          {/* Top Left Logo & Title */}
          <div className="absolute top-8 left-8 z-20 flex items-center space-x-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
              alt="SAINTSAL™ Logo"
              className="w-20 h-20 md:w-24 md:h-24"
            />
                        <h1 className="text-yellow-400 text-4xl md:text-5xl font-thin tracking-tight">
              SaintVisionAI™
            </h1>
          </div>

          {/* Centered Content */}
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            {/* Divine Quote */}
            <div className="mb-12 max-w-2xl mt-20">
              <p className="text-yellow-400 text-2xl md:text-3xl font-light mb-3 tracking-wide">
                "SaintSal" AI doesn't just answer.
              </p>
              <p className="text-yellow-400 text-2xl md:text-3xl font-light mb-3 tracking-wide">
                It adapts. It empowers. It becomes your...
              </p>
              <p className="text-yellow-400 text-4xl md:text-5xl font-bold tracking-wider">
                Divine Partner™
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 max-w-md w-full">
              <Link to="/login">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 font-medium text-lg py-6"
                >
                  Start Your Divine Journey
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 font-medium text-lg py-6"
                >
                  View Divine Plans
                </Button>
              </Link>
            </div>

            {/* Free Trial Notice */}
            <p className="text-gray-300 text-sm mt-6">
              ✨ Start with 7 days free • No credit card required
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-thin tracking-tight text-yellow-400 text-center mb-16">
              Why Choose Divine AI?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-8 text-center"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <Brain className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  HACP™ Technology
                </h3>
                <p className="text-gray-300">
                  Dual-engine processing with GPT-4o and Azure for unmatched
                  accuracy
                </p>
              </div>

              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-8 text-center"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  Faith-Aligned AI
                </h3>
                <p className="text-gray-300">
                  AI that respects your values and provides ethical guidance
                </p>
              </div>

              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-8 text-center"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  Enterprise Ready
                </h3>
                <p className="text-gray-300">
                  Scale from personal use to enterprise with advanced CRM tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 px-8 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-thin tracking-tight text-yellow-400 mb-8">
              Choose Your Divine Plan
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              From individual seekers to enterprise organizations, we have the
              perfect divine solution
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Unlimited Plan */}
              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-6"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <h3 className="text-xl font-medium text-white mb-2">
                  Unlimited
                </h3>
                <div className="text-3xl font-light text-yellow-400 mb-4">
                  $27<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Perfect for individuals
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-gray-800 border border-yellow-400/30 text-yellow-400 hover:bg-gray-700">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* PartnerTech Pro Plan */}
              <div
                className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-400/50 backdrop-blur-md rounded-3xl p-6 scale-105"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(251, 191, 36, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Most Popular
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  PartnerTech Pro
                </h3>
                <div className="text-3xl font-light text-yellow-400 mb-4">
                  $97<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Advanced CRM & automation
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 font-medium">
                    Upgrade to Pro
                  </Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div
                className="bg-gray-900/40 border border-purple-400/30 backdrop-blur-md rounded-3xl p-6"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(168, 85, 247, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <h3 className="text-xl font-medium text-white mb-2">
                  Enterprise
                </h3>
                <div className="text-3xl font-light text-purple-400 mb-4">
                  $497<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Full enterprise suite
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 text-center border-t border-yellow-400/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                alt="SAINTSAL™ Logo"
                className="w-12 h-12"
              />
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

        {/* PartnerTech AI Section */}
        <section className="py-28">
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
                  PartnerTech AI
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
                  onClick={() => (window.location.href = "/pricing")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
                >
                  Unlock Partner Access
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Faith-Aligned Vault Section */}
        <section className="py-28">
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
        <section className="py-32">
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F26b5158aa6864ad3bc02cc771407b767?format=webp&width=800"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="w-16 h-16"
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
                🚀 SaintVisionAI™ Access
              </Button>

              <div className="text-gray-400 text-sm font-light">
                Azure Cognitive Services • OpenAI GPT-4o • Premium
                Infrastructure
              </div>
            </div>
          </div>
        </section>

        {/* Professional Footer */}
        <footer className="bg-black/80 backdrop-blur-xl border-t border-yellow-400/20">
          <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
            {/* Main Footer Content - Hidden on mobile, shown on md+ */}
            <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="col-span-1">
                <div className="flex items-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F0c2c3dba9a664a668598e7591bc0c18b?format=webp&width=800"
                    alt="SAINTSAL™"
                    className="w-8 h-8 mr-3"
                  />
                  <div className="text-yellow-400 font-semibold">
                    SAINTSAL™
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                  Enterprise AI with integrity. Professional-grade intelligence
                  for those who demand excellence, privacy, and values-aligned
                  technology.
                </p>
                <div className="text-xs text-gray-500">
                  <div>Saint Vision Group LLC</div>
                  <div>Delaware Limited Partnership</div>
                </div>
              </div>

              {/* Platform */}
              <div>
                <h4 className="text-white font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => (window.location.href = "/console")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      AI Console
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/pricing")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/signup")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Get Started
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/chrome-install")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Chrome Extension
                    </button>
                  </li>
                </ul>
              </div>

              {/* Enterprise */}
              <div>
                <h4 className="text-white font-semibold mb-4">Enterprise</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => (window.location.href = "/partnertech")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      PartnerTech AI
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        (window.location.href = "https://saintvisiontech.com")
                      }
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Saint Vision Institute
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/crm")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      CRM Integration
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/hacp")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      HACP™ Technology
                    </button>
                  </li>
                </ul>
              </div>

              {/* Legal & Support */}
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Legal & Support
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => (window.location.href = "/privacy")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/terms")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/help")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Help Center
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "/setup")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Setup Guide
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Simple Mobile Footer */}
            <div className="md:hidden mb-8">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F0c2c3dba9a664a668598e7591bc0c18b?format=webp&width=800"
                  alt="SAINTSAL™"
                  className="w-6 h-6 mr-2"
                />
                <div className="text-yellow-400 font-semibold">SAINTSAL™</div>
              </div>
              <div className="flex justify-center space-x-6 text-sm mb-6">
                <button
                  onClick={() => (window.location.href = "/console")}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Console
                </button>
                <button
                  onClick={() => (window.location.href = "/pricing")}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => (window.location.href = "/help")}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Help
                </button>
                <button
                  onClick={() => (window.location.href = "/privacy")}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Privacy
                </button>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="border-t border-gray-700/50 pt-8 mb-8">
              <div className="bg-black/40 border border-yellow-400/10 rounded-xl p-6">
                <div className="text-center text-xs text-gray-500 leading-relaxed">
                  <div className="mb-3">
                    <strong className="text-yellow-400">HACP™</strong>{" "}
                    (Hierarchical Adaptive Cognitive Processing) protected under{" "}
                    <strong>U.S. Patent 10,290,222</strong> and additional
                    patent-pending technologies.
                  </div>
                  <div className="mb-3">
                    Infrastructure powered by{" "}
                    <strong>Azure Cognitive Services</strong> •{" "}
                    <strong>OpenAI GPT-4o</strong> • <strong>Supabase</strong>{" "}
                    ��� <strong>Vercel Edge</strong>
                  </div>
                  <div>
                    Built with enterprise-grade security:{" "}
                    <strong>AES-256 encryption</strong> •{" "}
                    <strong>SOC 2 compliance</strong> •{" "}
                    <strong>Zero-trust architecture</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <div className="mb-4 md:mb-0">
                © 2025 Saint Vision Group LLC. All rights reserved. Delaware
                Limited Partnership.
              </div>
              <div className="flex items-center space-x-6">
                <span>GDPR • CCPA • SOC 2 Compliant</span>
                <span className="text-yellow-400">•</span>
                <span>Faith-Aligned Technology</span>
              </div>
>>>>>>> 3e4b1d0e405c5c28744108976112bbdde42cddaf
            </div>
            <p className="text-yellow-400 text-sm font-thin tracking-[0.3em] mb-2">
              SAINTSAL™
            </p>
            <p className="text-gray-400 text-sm">
              Divine AI technology for the modern world
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}