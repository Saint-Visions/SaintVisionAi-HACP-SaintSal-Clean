import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Chrome, Lock, ArrowRight, Menu, X } from "lucide-react";

// Elite Flagship Homepage - OpenAI Architecture with SaintSal Divine Styling
const FallbackHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Header - OpenAI Style Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F91f5c7fb8c4248e3a21d8ed1cbcbead6?format=webp&width=800"
              alt="SaintVisionAI™"
              className="w-8 h-8 opacity-80 filter brightness-110"
            />
            <span
              className="text-xl font-medium text-white"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              SaintVisionAI™
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/dashboard"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/setup"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Setup
            </Link>
            <Link
              to="/help"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Help
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90 font-medium">
                Start Cooking
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <Link to="/dashboard" className="block text-white/70 py-2">
                Dashboard
              </Link>
              <Link to="/setup" className="block text-white/70 py-2">
                Setup
              </Link>
              <Link to="/help" className="block text-white/70 py-2">
                Help
              </Link>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link to="/login" className="block">
                  <Button variant="ghost" className="w-full text-white/70">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" className="block">
                  <Button className="w-full bg-[#FACC15] text-black">
                    Start Cooking
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Full Bleed Background */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F03153bd5b4c343c08a8337ee7aa5dbc0?format=webp&width=800"
              alt="SaintSal™"
              className="w-20 h-20 mx-auto mb-6 animate-pulse filter drop-shadow-2xl opacity-70 brightness-125"
              style={{
                filter:
                  "drop-shadow(0 0 20px rgba(250, 204, 21, 0.3)) brightness(1.25)",
              }}
            />
          </div>

          {/* Hero Title */}
          <h1
            className="text-6xl md:text-8xl mb-4 tracking-tight"
            style={{
              fontFamily: "DM Serif Display, serif",
              background:
                "linear-gradient(135deg, #FACC15 0%, rgba(250, 204, 21, 0.8) 50%, #FACC15 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SaintSal™
          </h1>

          {/* Tagline */}
          <p
            className="text-2xl md:text-3xl mb-6 text-[#FACC15] tracking-wide"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Cookin' Knowledge
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            AI doesn't just answer. It adapts. It empowers. It becomes yours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/signup">
              <Button className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90 px-8 py-6 text-lg font-medium rounded-xl shadow-2xl shadow-[#FACC15]/20 transition-all duration-300 hover:scale-105">
                Start Cookin' Knowledge
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/console">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl backdrop-blur-sm"
              >
                Try Console
              </Button>
            </Link>
          </div>

          {/* Bottom Quote */}
          <p className="text-white/60 text-lg italic max-w-2xl mx-auto">
            "Ready to move smarter today than you did yesterday?"
          </p>
        </div>

        {/* Sticky Chat Bubble - Bottom Right */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-[#FACC15] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F03153bd5b4c343c08a8337ee7aa5dbc0?format=webp&width=800"
              alt="Chat"
              className="w-8 h-8 opacity-90 filter brightness-110"
            />
          </button>
        </div>
      </section>

      {/* Enterprise Intelligence - Clean Section */}
      <section className="py-24 px-6 bg-[#10161C] relative overflow-hidden">
        {/* Subtle Circuit Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, #FACC15 1px, #FACC15 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, #FACC15 1px, #FACC15 2px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Enterprise Intelligence
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Professional-grade AI infrastructure with dual-engine redundancy,
              faith-aligned policies, and enterprise-scale reliability.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dual AI Console */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FACC15]/30 transition-all duration-300 hover:bg-white/10">
              <Brain className="w-12 h-12 text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3
                className="text-xl text-white mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Dual AI Console
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                GPT-4o + Azure working in perfect synchronization for unmatched
                reliability and intelligence.
              </p>
            </div>

            {/* PartnerTech CRM */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FACC15]/30 transition-all duration-300 hover:bg-white/10">
              <Chrome className="w-12 h-12 text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3
                className="text-xl text-white mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                PartnerTech CRM
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Chrome extension + enterprise automation for seamless workflow
                integration.
              </p>
            </div>

            {/* Divine Security */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FACC15]/30 transition-all duration-300 hover:bg-white/10 md:col-span-2 lg:col-span-1">
              <Lock className="w-12 h-12 text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3
                className="text-xl text-white mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Faith-Aligned Security
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Enterprise-grade encryption with values-first architecture and
                moral excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean & Professional */}
      <footer className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Thank You Section */}
          <div className="text-center mb-12">
            <h3
              className="text-4xl text-[#FACC15] mb-4"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Thank You!
            </h3>
            <p className="text-2xl text-white/80">SV.</p>
          </div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company */}
            <div>
              <h4 className="text-white font-medium mb-4">SaintVisionAI</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Divine AI companion for business intelligence.
                Professional-grade solutions with faith-aligned values.
              </p>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <div className="space-y-2">
                <Link
                  to="/terms"
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/privacy"
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <a
                  href="mailto:support@saintvisionai.com"
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Patent & Copyright */}
            <div>
              <h4 className="text-white font-medium mb-4">Innovation</h4>
              <p className="text-white/60 text-sm mb-2">
                U.S. Patent 10.290.222
              </p>
              <p className="text-white/60 text-sm">
                © 2024 SaintVisionAI. All rights reserved.
              </p>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/40 text-sm">
              Built with divine precision. Powered by faith-aligned technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Index() {
  return <FallbackHomepage />;
}
