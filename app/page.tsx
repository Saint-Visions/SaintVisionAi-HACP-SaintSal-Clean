import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Wrench, Zap, Shield, Users, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/48bf7ae07524f3ab5cd7dbd41650b41a12d29df9?width=1920)",
        backgroundSize: "cover",
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
        <section className="min-h-[80vh] relative p-8 pb-16">
          {/* Top Left Logo & Title */}
          <div className="absolute top-8 left-8 z-20 flex items-center space-x-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2"
              alt="SAINTSAL™ Circuit Board Logo"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h1 className="text-white text-4xl md:text-5xl font-thin tracking-tight">
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
                GOTTA GUY™!
              </p>
            </div>

            {/* Branding */}
            <div className="mb-8">
              <div className="text-white text-lg font-light uppercase tracking-[0.4em] mb-3">
                SAINTSAL™
              </div>
              <div className="text-yellow-400 text-3xl md:text-4xl font-bold tracking-wide mb-8">
                Cookin' Knowledge
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mb-12">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-12 py-5 rounded-2xl text-2xl shadow-2xl shadow-yellow-400/40 transition-all duration-300 hover:scale-105">
                  🔥 Start Cooking
                </Button>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 mb-16 justify-center">
              <Link href="/console">
                <Button className="bg-blue-600/30 border border-blue-400/60 text-blue-200 hover:bg-blue-600/50 hover:text-white backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300 text-lg">
                  🧠 AI Chat
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-green-600/30 border border-green-400/60 text-green-200 hover:bg-green-600/50 hover:text-white backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300 text-lg">
                  📱 Sign In
                </Button>
              </Link>
            </div>

            {/* Quick Access */}
            <div className="text-yellow-400/60 text-sm font-light mb-6 tracking-wide">
              Quick Access
            </div>
            <div className="flex justify-center space-x-80 text-2xl">
              <Link
                href="/pricing"
                className="text-red-400 hover:text-red-300 font-light transition-colors hover:scale-110 duration-300"
              >
                🚨 Pricing
              </Link>
              <Link
                href="/setup"
                className="text-blue-400 hover:text-blue-300 font-light transition-colors hover:scale-110 duration-300"
              >
                🛠️ Setup
              </Link>
              <Link
                href="/help"
                className="text-yellow-400 hover:text-yellow-300 font-light transition-colors hover:scale-110 duration-300"
              >
                📖 Help
              </Link>
            </div>
          </div>
        </section>

        {/* Elite Technology Section */}
        <section className="py-24 relative z-20 mt-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Link
              href="/why"
              className="inline-block text-yellow-400/60 text-sm font-light tracking-[0.3em] uppercase mb-4 hover:text-yellow-400 transition-colors cursor-pointer underline decoration-yellow-400/60 hover:decoration-yellow-400"
            >
              What Separates Us
            </Link>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Enterprise Intelligence
            </h2>
            <p className="text-gray-300 text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Professional-grade AI infrastructure with dual-engine redundancy,
              faith-aligned privacy, and enterprise-scale reliability.
            </p>

            {/* HACP Integration */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  HACP™ Technology
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Dual-brain architecture (GPT + Azure) that learns what YOU
                  need to build and actually gets it done.
                  <strong className="text-white">
                    {" "}
                    Not just advice, but action.
                  </strong>
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Everywhere You Go
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  🎤 Voice • 📱 Mobile • 🌐 Chrome Extension
                  <br />
                  <strong className="text-white">
                    Your cognitive companion, always working.
                  </strong>
                </p>
              </div>
            </div>

            {/* Why CTA */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-black/40 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  Why?
                </h3>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  Dive into what separates us from every other AI platform. See
                  the full comparison, understand the technology, and discover
                  why SAINTSAL™ isn't just another chatbot.
                </p>
                <Link href="/why">
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-xl transition-all duration-300 hover:scale-105">
                    See What We're Made Of
                  </Button>
                </Link>
              </div>
            </div>

            {/* Saint Vision Institute */}
            <div className="p-6 bg-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-2xl max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Powered by{" "}
                <a
                  href="https://saintvisiontech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors cursor-pointer"
                >
                  The Saint Vision Institute of AI Research and Development
                </a>
                , featuring our groundbreaking patent and patent-pending{" "}
                <span className="text-yellow-400 font-medium">HACP</span>{" "}
                technology. Where divine innovation meets enterprise excellence.
              </p>
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
                    <Link
                      href="/console"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      AI Console
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chrome-install"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Chrome Extension
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Enterprise */}
              <div>
                <h4 className="text-white font-semibold mb-4">Enterprise</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/partnertech"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      PartnerTech AI
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://saintvisiontech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Saint Vision Institute
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/crm"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      CRM Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hacp"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      HACP™ Technology
                    </Link>
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
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/setup"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Setup Guide
                    </Link>
                  </li>
                </ul>
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
