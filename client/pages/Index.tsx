import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Shield, Lock, Server, CheckCircle } from "lucide-react";

export default function Index() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
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
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-amber-400/50 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 12px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.1)",
            filter: "blur(0.2px)",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="relative px-8 py-8 min-h-screen">
          <div className="absolute top-8 left-8 flex items-center z-20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
              alt="SAINTSAL™ Logo"
              className="w-24 h-24"
            />
            <h1 className="ml-12 text-5xl font-thin text-amber-400 tracking-tight leading-tight">
              SaintVisionAI™
            </h1>
          </div>

          {/* Elite Technology Hero */}
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <div className="mb-12 mt-20 max-w-4xl">
              <p className="text-amber-400 text-lg font-light tracking-wider mb-2">
                ™ E L I T E T E C H N O L O G Y
              </p>
              <h2 className="text-white text-4xl font-light mb-8 leading-relaxed">
                Enterprise Intelligence
              </h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                Professional-grade AI infrastructure with dual-engine
                redundancy, faith-aligned privacy, and enterprise-scale
                reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Dual AI Console */}
        <section className="px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <h3 className="text-amber-400 text-2xl font-light">
                  Dual AI Console
                </h3>
                <p className="text-white text-lg">
                  GPT-4o + Azure Cognitive Services working in perfect
                  synchronization.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Real-time cognition with 24/7 service reliability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Zero hallucinations through dual-validation architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Real-time dual-engine processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Enterprise-grade security
                  </li>
                </ul>
                <div className="pt-6">
                  <Button className="bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-medium px-8 py-3 rounded-xl">
                    Try Dual Chat Mode
                  </Button>
                </div>
              </div>

              {/* Console Mockup */}
              <div className="bg-gray-900/60 backdrop-blur border border-amber-400/20 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="text-amber-400 text-sm font-medium">
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

        {/* PartnerTech AI */}
        <section className="px-8 py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-amber-400 text-2xl font-light">
                  PartnerTech AI
                </h3>
                <p className="text-gray-300 text-lg">
                  When you're ready to scale. Advanced CRM integration, Chrome
                  extension automation, AI-triggered workflows, and intelligent
                  client routing systems.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Enterprise CRM integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Chrome extension automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    AI workflow triggers
                  </li>
                </ul>
                <Button className="border border-amber-400/50 text-amber-400 bg-transparent hover:bg-amber-400/10 px-8 py-3 rounded-xl">
                  Unlock Partner Access
                </Button>
              </div>

              {/* Faith-Aligned Vault */}
              <div className="space-y-6">
                <h3 className="text-amber-400 text-2xl font-light">
                  Faith-Aligned Vault
                </h3>
                <p className="text-gray-300 text-lg">
                  Secure. Private. Moral. Your conversations, billing data, and
                  personal information protected by enterprise-grade encryption
                  with values-first architecture.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Lock className="w-5 h-5 text-amber-400 mr-3" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-amber-400 mr-3" />
                    Secure Stripe billing
                  </li>
                  <li className="flex items-center">
                    <Server className="w-5 h-5 text-amber-400 mr-3" />
                    Role-based authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                    Faith-centered data policies
                  </li>
                </ul>
                <Button className="border border-amber-400/50 text-amber-400 bg-transparent hover:bg-amber-400/10 px-8 py-3 rounded-xl">
                  Learn About Security
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Movement */}
        <section className="px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-amber-400 text-6xl font-thin mb-8 tracking-wider">
              T H E M O V E M E N T
            </h2>
            <h3 className="text-white text-3xl font-light mb-6">
              Elite AI Sanctuary
            </h3>
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Built for those who refuse to compromise on excellence, privacy,
              or values. Join thousands who've discovered their GOTTA GUY™.
            </p>

            {/* Security Status */}
            <div className="bg-gray-900/40 backdrop-blur border border-amber-400/20 rounded-2xl p-8 mb-12">
              <h4 className="text-amber-400 text-lg font-medium mb-6">
                Protected Data Vault
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-gray-400">Encryption Status</div>
                  <div className="text-green-400 font-medium">
                    AES-256 Active
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Data Location</div>
                  <div className="text-green-400 font-medium">
                    Private Cloud
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Access Control</div>
                  <div className="text-green-400 font-medium">Role-Based</div>
                </div>
                <div>
                  <div className="text-gray-400">Ethics Compliance</div>
                  <div className="text-green-400 font-medium">
                    Faith-Aligned
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 max-w-md mx-auto">
              <Link to="/login">
                <Button className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-medium py-6 text-lg rounded-xl">
                  SaintVisionAI™ Access
                </Button>
              </Link>
              <Link to="/pricing">
                <Button className="w-full border border-amber-400/50 text-amber-400 bg-transparent hover:bg-amber-400/10 py-6 text-lg rounded-xl">
                  View Enterprise Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-16 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-lg font-medium mb-4">
                SAINTSAL™ • Cookin' Knowledge
              </p>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                "We built this for the builders, the believers, the ones who
                demand more than chatbots. This is enterprise AI with a soul,
                technology with values, innovation with integrity."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-400">
              <div>
                <h5 className="text-amber-400 font-medium mb-3">SAINTSAL™</h5>
                <ul className="space-y-2">
                  <li>
                    <Link to="/console" className="hover:text-amber-400">
                      Console
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="hover:text-amber-400">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/help" className="hover:text-amber-400">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="hover:text-amber-400">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-amber-400 font-medium mb-3">Technology</h5>
                <ul className="space-y-2">
                  <li>Azure Cognitive Services</li>
                  <li>OpenAI GPT-4o</li>
                  <li>Premium Infrastructure</li>
                  <li>HACP™ Processing</li>
                </ul>
              </div>

              <div>
                <h5 className="text-amber-400 font-medium mb-3">Security</h5>
                <ul className="space-y-2">
                  <li>AES-256 encryption</li>
                  <li>SOC 2 compliance</li>
                  <li>Zero-trust architecture</li>
                  <li>Faith-Aligned Technology</li>
                </ul>
              </div>

              <div>
                <h5 className="text-amber-400 font-medium mb-3">Legal</h5>
                <ul className="space-y-2">
                  <li>GDPR Compliant</li>
                  <li>CCPA Compliant</li>
                  <li>SOC 2 Certified</li>
                  <li>Patent Protected</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-gray-800/50">
              <p className="text-gray-500 text-sm">
                HACP™ (Hierarchical Adaptive Cognitive Processing) protected
                under U.S. Patent 10,290,222 and additional patent-pending
                technologies.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                © 2025 Saint Vision Group LLC. All rights reserved. Delaware
                Limited Partnership.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
