import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Shield, CheckCircle, Lock, Server } from "lucide-react";

export default function Index() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F417fa80156424587b5052fdb53a44654)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Professional Business Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/70 to-slate-900/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-slate-800/50 z-1" />

      {/* Divine Golden Particles */}
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

      <div className="relative z-10">
        {/* GOTTA GUY Hero Section */}
        <section className="min-h-[80vh] relative p-8 pb-16">
          {/* Top Left Logo & Premium Title */}
          <div className="absolute top-8 left-8 z-20 flex items-center space-x-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
              alt="SAINTSAL™ Logo"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            {/* Apple/OpenAI Premium White Title - Updated for Production */}
            <h1 className="text-white text-6xl md:text-7xl font-light tracking-tight">
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
              <p className="text-yellow-400 text-6xl md:text-7xl font-bold tracking-wider mb-8">
                GOTTA GUY™!
              </p>
              <p className="text-yellow-400 text-sm font-thin tracking-[0.3em] mb-2">
                SAINTSAL™
              </p>
              <p className="text-yellow-400 text-3xl md:text-4xl font-medium tracking-wide mb-12">
                Cookin' Knowledge
              </p>
            </div>

            {/* Start Cooking Button */}
            <div className="mb-8">
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400 font-medium text-lg px-12 py-4 rounded-full"
                >
                  🔥 Start Cooking
                </Button>
              </Link>
            </div>

            {/* Quick Access Buttons */}
            <div className="flex space-x-4 mb-8">
              <Link to="/console">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-400/50 text-yellow-400 bg-transparent hover:bg-yellow-400/10 rounded-full px-6"
                >
                  ��📊 AI Chat
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-400/50 text-gray-400 bg-transparent hover:bg-gray-400/10 rounded-full px-6"
                >
                  🖤 Sign In
                </Button>
              </Link>
            </div>

            <p className="text-yellow-400 text-sm mb-4">Quick Access</p>

            {/* 24/7 SAINTSAL Help Section - Divine Styling */}
            <div
              className="p-8 rounded-3xl border mb-8 max-w-lg"
              style={{
                backdropFilter: "blur(24px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderColor: "rgba(138, 43, 226, 0.3)",
              }}
            >
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30 mr-3">
                    <span className="text-purple-400 text-2xl">💬</span>
                  </div>
                  <h3 className="text-purple-400 text-xl font-light">
                    24/7 SAINTSAL Support
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Get instant help from our AI support agent. Handles upgrades,
                  troubleshooting, and questions better than any human support!
                </p>
                <Link to="/console">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-xl"
                    style={{
                      boxShadow: "rgba(138, 43, 226, 0.4) 0px 15px 35px -12px",
                    }}
                  >
                    💬 Chat with SAINTSAL Bot
                  </Button>
                </Link>
              </div>
            </div>

            {/* Bottom Navigation Icons - Divine Styling */}
            <div className="flex space-x-6 items-center">
              <Link to="/pricing" className="text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backdropFilter: "blur(24px)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(250, 204, 21, 0.3)",
                  }}
                >
                  <span className="text-yellow-400 text-xl">💰</span>
                </div>
                <span className="text-yellow-400 text-xs font-medium">
                  Pricing
                </span>
              </Link>

              <Link to="/setup" className="text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backdropFilter: "blur(24px)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(156, 163, 175, 0.3)",
                  }}
                >
                  <span className="text-gray-400 text-xl">⚙️</span>
                </div>
                <span className="text-gray-400 text-xs font-medium">Setup</span>
              </Link>

              <Link to="/help" className="text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backdropFilter: "blur(24px)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                  }}
                >
                  <span className="text-blue-400 text-xl">📚</span>
                </div>
                <span className="text-blue-400 text-xs font-medium">Help</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Elite Technology Section - Matching Why Page Styling */}
        <section
          className="py-20 px-8"
          style={{
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-yellow-400 text-lg font-light tracking-wider mb-4"
              style={{
                filter:
                  "drop-shadow(rgba(0, 0, 0, 0.04) 0px 10px 8px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 3px)",
              }}
            >
              ™ E L I T E T E C H N O L O G Y
            </p>
            <h2
              className="text-white text-4xl font-light mb-8 leading-relaxed"
              style={{
                letterSpacing: "-1.2px",
              }}
            >
              Enterprise Intelligence
            </h2>
            <p className="text-gray-300 text-lg mb-16 leading-relaxed max-w-3xl mx-auto">
              Professional-grade AI infrastructure with dual-engine redundancy,
              faith-aligned privacy, and enterprise-scale reliability.
            </p>
            <p className="text-gray-300 text-sm mb-12">
              Powered by{" "}
              <span className="text-yellow-400">
                The Saint Vision Institute of AI Research and Development
              </span>
              , featuring our groundbreaking patent and patent-pending{" "}
              <span className="text-yellow-400">HACP</span> technology. Where
              divine innovation meets enterprise excellence.
            </p>
            <div className="inline-flex items-center bg-yellow-500/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-yellow-400 text-sm">
                Live Agent Enabled
              </span>
            </div>
          </div>
        </section>

        {/* Dual AI Console - Why Page Card Styling */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div
                className="space-y-6 p-8 rounded-3xl border"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(96, 165, 250, 0.3)",
                }}
              >
                <h3 className="text-blue-400 text-2xl font-light">
                  Dual AI Console
                </h3>
                <p className="text-white text-lg">
                  <span className="text-yellow-400">
                    GPT-4o + Azure Cognitive Services
                  </span>{" "}
                  working in perfect synchronization. Real-time cognition with
                  24/7 service reliability. Zero hallucinations through
                  dual-validation architecture.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time dual-engine processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Enterprise-grade security
                  </li>
                </ul>
                <div className="pt-6">
                  <Button
                    className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium px-8 py-3 rounded-xl"
                    style={{
                      boxShadow: "rgba(250, 204, 21, 0.4) 0px 25px 50px -12px",
                    }}
                  >
                    Try Dual Chat Mode
                  </Button>
                </div>
              </div>

              {/* Console Mockup */}
              <div
                className="bg-gray-900/60 backdrop-blur border rounded-2xl p-6"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(250, 204, 21, 0.3)",
                }}
              >
                <div className="space-y-4">
                  <div className="text-yellow-400 text-sm font-medium">
                    SaintVisionAI Console
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <div className="text-blue-300 text-xs mb-1">
                        GPT-4o Engine
                      </div>
                      <div className="text-gray-300 text-sm">
                        Processing natural language...
                      </div>
                    </div>
                    <div className="bg-purple-900/30 p-3 rounded-lg">
                      <div className="text-purple-300 text-xs mb-1">
                        Azure Cognitive
                      </div>
                      <div className="text-gray-300 text-sm">
                        Cross-validating response...
                      </div>
                    </div>
                    <div className="bg-green-900/30 p-3 rounded-lg">
                      <div className="text-green-300 text-xs mb-1">
                        Unified Output
                      </div>
                      <div className="text-gray-300 text-sm">
                        ✓ Verified response ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PartnerTech AI - Why Page Card Styling */}
        <section
          className="py-20 px-8"
          style={{
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div
                className="space-y-6 p-8 rounded-3xl border"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(250, 204, 21, 0.3)",
                }}
              >
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-blue-400 text-2xl font-light">
                    PartnerTech AI
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  When you're ready to scale. Advanced CRM integration, Chrome
                  extension automation, AI-triggered workflows, and intelligent
                  client routing systems.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Enterprise CRM integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Chrome extension automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    AI workflow triggers
                  </li>
                </ul>
                <Button className="border border-blue-400/50 text-blue-400 bg-transparent hover:bg-blue-400/10 px-8 py-3 rounded-xl">
                  Unlock Partner Access
                </Button>
              </div>

              {/* Faith-Aligned Vault */}
              <div
                className="space-y-6 p-8 rounded-3xl border"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(34, 197, 94, 0.3)",
                }}
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-green-400 text-2xl font-light">
                    Faith-Aligned Vault
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  <span className="text-green-400">
                    Secure. Private. Moral.
                  </span>{" "}
                  Your conversations, billing data, and personal information
                  protected by enterprise-grade encryption with values-first
                  architecture.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Secure Stripe billing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Role-based authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Faith-centered data policies
                  </li>
                </ul>
                <Button className="border border-green-400/50 text-green-400 bg-transparent hover:bg-green-400/10 px-8 py-3 rounded-xl">
                  Learn About Security
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Movement - Why Page Styling */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-light tracking-wider mb-4">
              T H E M O V E M E N T
            </p>
            <h2
              className="text-white text-3xl font-light mb-6"
              style={{
                letterSpacing: "-1.2px",
              }}
            >
              Elite AI Sanctuary
            </h2>
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Built for those who refuse to compromise on excellence, privacy,
              or values. Join thousands who've discovered their{" "}
              <span className="text-yellow-400">GOTTA GUY™</span>.
            </p>

            <div
              className="p-8 rounded-3xl border mb-12"
              style={{
                backdropFilter: "blur(24px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderColor: "rgba(250, 204, 21, 0.3)",
              }}
            >
              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                  alt="SAINTSAL™ Logo"
                  className="w-16 h-16"
                />
              </div>
              <h4 className="text-yellow-400 text-lg font-medium mb-4">
                SAINTSAL™ • Cookin' Knowledge
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                "We built this for the builders, the believers, the ones who
                demand more than chatbots. This is enterprise AI with a soul,
                technology with values, innovation with integrity."
              </p>
            </div>

            {/* Access Button */}
            <div className="space-y-4 max-w-md mx-auto">
              <Link to="/login">
                <Button
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium py-6 text-lg rounded-xl"
                  style={{
                    boxShadow: "rgba(250, 204, 21, 0.4) 0px 25px 50px -12px",
                  }}
                >
                  🚀 SaintVisionAI™ Access
                </Button>
              </Link>
              <p className="text-gray-400 text-sm">
                Azure Cognitive Services • OpenAI GPT-4o • Premium
                Infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Footer - Why Page Styling */}
        <footer
          className="py-16 px-8 text-center border-t"
          style={{
            borderColor: "rgba(250, 204, 21, 0.2)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                alt="SAINTSAL™ Logo"
                className="w-12 h-12"
              />
            </div>
            <p
              className="text-yellow-400 text-sm font-thin mb-2"
              style={{
                letterSpacing: "3.6px",
              }}
            >
              SAINTSAL™
            </p>

            <div className="flex justify-center space-x-8 mb-8 text-sm">
              <Link
                to="/console"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Console
              </Link>
              <Link
                to="/pricing"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Pricing
              </Link>
              <Link
                to="/help"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Help
              </Link>
              <Link
                to="/privacy"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Privacy
              </Link>
            </div>

            <div className="text-center space-y-2 text-xs text-gray-400">
              <p>
                <span className="text-yellow-400">HACP™</span> (Hierarchical
                Adaptive Cognitive Processing) protected under{" "}
                <span className="text-yellow-400">U.S. Patent 10,290,222</span>{" "}
                and additional patent-pending technologies.
              </p>
              <p>
                Infrastructure powered by{" "}
                <span className="text-yellow-400">
                  Azure Cognitive Services
                </span>{" "}
                • <span className="text-yellow-400">OpenAI GPT-4o</span> •{" "}
                <span className="text-yellow-400">Supabase</span> •{" "}
                <span className="text-yellow-400">Vercel Edge</span>
              </p>
              <p>
                Built with enterprise-grade security:{" "}
                <span className="text-yellow-400">AES-256 encryption</span> •{" "}
                <span className="text-yellow-400">SOC 2 compliance</span> •{" "}
                <span className="text-yellow-400">Zero-trust architecture</span>
              </p>
              <p className="pt-4">
                © 2025 Saint Vision Group LLC. All rights reserved. Delaware
                Limited Partnership.
              </p>
              <p>
                <span className="text-yellow-400">GDPR</span> •{" "}
                <span className="text-yellow-400">CCPA</span> •{" "}
                <span className="text-yellow-400">SOC 2 Compliant</span> •{" "}
                <span className="text-yellow-400">
                  Faith-Aligned Technology
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
