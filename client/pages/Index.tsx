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
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between min-h-[110px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
              alt="SaintVisionAI™"
              className="w-[52px] h-[52px] opacity-80 filter brightness-110"
            />
            <span
              className="text-[34px] font-semibold text-white font-sf-pro"
              style={{
                fontFamily:
                  "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                letterSpacing: "-0.025em",
              }}
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
        className="relative h-[70vh] flex items-center justify-center"
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
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F547ecdbc578840e9a4885d464b48018b"
              alt="SaintSal™"
              className="w-[180px] h-[180px] mx-auto mb-6 animate-pulse filter drop-shadow-2xl opacity-70 brightness-125"
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
            AI doesn't just answer. It adapts. It empowers. It becomes your
            GOTTA GUY™.
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

      {/* What We Actually Do For You */}
      <section
        className="py-16 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-black/80" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header with Title and Image Side by Side */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <h2
                className="text-4xl md:text-5xl mb-2 text-white font-light"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Elite Technology
              </h2>
              <p className="text-[#FACC15] font-semibold text-sm tracking-[0.2em] uppercase">
                ENTERPRISE READY
              </p>
              <p className="text-white/70 text-sm mt-2 max-w-md">
                <span className="text-[#FACC15] font-semibold">
                  Dual AI systems
                </span>{" "}
                handle your business operations while you focus on growth.
              </p>
            </div>

            <Link to="/why" className="group cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F2180d28e80a741d68e8659ea962a9f05"
                alt="Elite Technology Platform"
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Business Strategy */}
            <div className="group p-6 rounded-xl bg-white/3 backdrop-blur-sm border border-white/8 hover:border-[#FACC15]/30 transition-all duration-300">
              <Brain className="w-10 h-10 text-[#FACC15] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg text-white mb-3 font-semibold">
                Business Strategy
              </h3>
              <p className="text-white/70 text-sm">
                Market analysis, competitive research, and strategic planning
                powered by dual AI engines.
              </p>
            </div>

            {/* CRM Automation */}
            <div className="group p-6 rounded-xl bg-white/3 backdrop-blur-sm border border-white/8 hover:border-neon-blue/30 transition-all duration-300">
              <Chrome className="w-10 h-10 text-neon-blue mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg text-white mb-3 font-semibold">
                CRM Integration
              </h3>
              <p className="text-white/70 text-sm">
                Seamless contact management, automated follow-ups, and
                intelligent lead scoring.
              </p>
            </div>

            {/* Growth Analytics */}
            <div className="group p-6 rounded-xl bg-white/3 backdrop-blur-sm border border-white/8 hover:border-neon-green/30 transition-all duration-300">
              <Lock className="w-10 h-10 text-neon-green mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg text-white mb-3 font-semibold">
                Growth Analytics
              </h3>
              <p className="text-white/70 text-sm">
                Real-time performance tracking with actionable insights for
                scaling your business.
              </p>
            </div>
          </div>

          {/* CTA Buttons Below Boxes */}
          <div className="text-center">
            <div className="flex justify-center gap-4">
              <Link to="/console">
                <Button className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90 px-8 py-3 font-semibold rounded-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Intelligence - Clean Section */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay - Same as Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* What Separates Us Header */}
            <div className="mb-4">
              <Link to="/why">
                <span
                  className="text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity cursor-pointer"
                  style={{
                    fontFamily:
                      "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                    color: "#FACC15",
                    letterSpacing: "0.2em",
                  }}
                >
                  WHAT SEPARATES US
                </span>
              </Link>
            </div>

            <h2
              className="text-5xl md:text-6xl mb-6 text-white font-light"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Enterprise Intelligence
            </h2>

            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Professional-grade AI infrastructure with dual-engine redundancy,
              faith-aligned policies, and enterprise-scale reliability.
            </p>

            {/* What Separates Us */}
            <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-white/2 backdrop-blur-sm border border-white/5">
              <p className="text-lg text-white/90 leading-relaxed">
                Powered by{" "}
                <span className="neon-blue font-semibold">
                  The Saint Vision Institute of AI Research and Development
                </span>
                , featuring our groundbreaking patent and patent-pending{" "}
                <span className="text-[#FACC15] font-semibold">HACP</span>{" "}
                technology. Where{" "}
                <span className="neon-green font-semibold">
                  divine innovation
                </span>{" "}
                meets{" "}
                <span className="neon-purple font-semibold">
                  enterprise excellence
                </span>
                .
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dual AI Console */}
            <div className="group p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/8 hover:border-[#FACC15]/30 transition-all duration-300 hover:bg-white/5">
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
            <div className="group p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/8 hover:border-[#FACC15]/30 transition-all duration-300 hover:bg-white/5">
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
            <div className="group p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/8 hover:border-[#FACC15]/30 transition-all duration-300 hover:bg-white/5 md:col-span-2 lg:col-span-1">
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

      {/* PartnerTech Section */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              PartnerTech AI
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              When you're ready to scale. Advanced CRM integration, Chrome
              extension automation, AI-triggered workflows, and intelligent
              client routing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PartnerTech AI Card */}
            <div className="p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/8">
              <div className="mb-6">
                <Chrome className="w-12 h-12 text-[#FACC15] mb-4" />
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  PartnerTech AI
                </h3>
                <p className="text-white/70 mb-6">
                  When you're ready to scale. Advanced CRM integration, Chrome
                  extension automation, AI-triggered workflows, and intelligent
                  client routing systems.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">
                    Enterprise CRM integration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">
                    Chrome extension automation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">AI workflow triggers</span>
                </div>
              </div>

              <Button className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20">
                Unlock Partner Access
              </Button>
            </div>

            {/* PartnerTech Suite Card */}
            <div className="p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-neon-blue/30">
              <div className="flex justify-between items-start mb-6">
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  PartnerTech Suite
                </h3>
                <span className="neon-blue text-sm font-semibold px-3 py-1 rounded-full bg-neon-blue/20">
                  Premium Tier
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                    <Chrome className="w-6 h-6 neon-blue" />
                  </div>
                  <span className="text-white/70 text-sm">CRM</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                    <Chrome className="w-6 h-6 neon-blue" />
                  </div>
                  <span className="text-white/70 text-sm">Chrome</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 neon-blue" />
                  </div>
                  <span className="text-white/70 text-sm">Triggers</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 neon-blue" />
                  </div>
                  <span className="text-white/70 text-sm">AI Logic</span>
                </div>
              </div>

              <Button className="w-full bg-neon-blue text-white hover:bg-neon-blue/80 neon-glow-blue">
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Faith-Aligned Vault Section */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Faith-Aligned Vault Card */}
            <div className="p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/8">
              <div className="mb-6">
                <Lock className="w-12 h-12 text-neon-green mb-4" />
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  Faith-Aligned Vault
                </h3>
                <p className="text-white/70 mb-6">
                  <span className="neon-green font-semibold">
                    Secure. Private. Moral.
                  </span>{" "}
                  Your conversations, billing data, and personal information
                  protected by enterprise-grade encryption with values-first
                  architecture.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">Secure Stripe billing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">
                    Role-based authentication
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-green flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white/80">
                    Faith-centered data policies
                  </span>
                </div>
              </div>

              <Button className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20">
                Learn About Security
              </Button>
            </div>

            {/* Protected Data Vault Card */}
            <div className="p-8 rounded-2xl bg-white/3 backdrop-blur-sm border border-neon-green/30">
              <div className="text-center mb-8">
                <Lock className="w-16 h-16 mx-auto mb-4 text-neon-green" />
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  Protected Data Vault
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Encryption Status</span>
                  <span className="neon-green font-semibold">
                    AES-256 Active
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Data Location</span>
                  <span className="text-white/90">Private Cloud</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Access Control</span>
                  <span className="neon-blue font-semibold">Role-Based</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/70">Ethics Compliance</span>
                  <span className="neon-green font-semibold">
                    Faith-Aligned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MOVEMENT - Elite AI Sanctuary */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* The Movement Header */}
            <div className="mb-4">
              <span
                className="text-sm font-semibold tracking-[0.2em] uppercase"
                style={{
                  fontFamily:
                    "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  color: "#FACC15",
                  letterSpacing: "0.2em",
                }}
              >
                THE MOVEMENT
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl mb-8 text-white"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Elite AI Sanctuary
            </h2>

            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Built for those who refuse to compromise on excellence, privacy,
              or values. Join thousands who've discovered their{" "}
              <span className="text-[#FACC15] font-semibold">GOTTA GUY™</span>.
            </p>
          </div>

          {/* Quote Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
                  alt="SV Logo"
                  className="w-12 h-12 mx-auto mb-4 opacity-80"
                />
                <p className="text-[#FACC15] font-semibold text-lg">
                  SAINTSAL™ • Cookin' Knowledge
                </p>
              </div>

              <blockquote className="text-xl text-white/80 italic text-center leading-relaxed mb-4">
                "We built this for the builders, the believers, the ones who
                demand more than chatbots. This is enterprise AI with a soul,
                technology with values, innovation with integrity."
              </blockquote>
            </div>
          </div>

          {/* SaintVisionAI Access */}
          <div className="text-center">
            <div className="mb-4">
              <span
                className="text-lg font-semibold"
                style={{ color: "#FACC15" }}
              >
                🚀 SaintVisionAI™ Access
              </span>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Azure Cognitive Services • OpenAI GPT-4o �� Premium Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Professional & Comprehensive */}
      <footer
        className="py-12 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/85" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
                alt="SaintVisionAI™"
                className="w-8 h-8 opacity-80"
              />
              <span
                className="text-[#FACC15] text-xl font-semibold"
                style={{
                  fontFamily:
                    "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                }}
              >
                SAINTVISIONAI™
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-center gap-6 mb-8">
              <Link
                to="/console"
                className="text-white/70 hover:text-[#FACC15] text-sm transition-colors"
              >
                Console
              </Link>
              <Link
                to="/pricing"
                className="text-white/70 hover:text-[#FACC15] text-sm transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/help"
                className="text-white/70 hover:text-[#FACC15] text-sm transition-colors"
              >
                Help
              </Link>
              <Link
                to="/privacy"
                className="text-white/70 hover:text-[#FACC15] text-sm transition-colors"
              >
                Privacy
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-8"></div>
          </div>

          {/* Patent & Technology Information */}
          <div className="space-y-6 text-center">
            {/* Patent Information */}
            <div>
              <p className="text-white/80 text-sm">
                <span className="text-[#FACC15] font-semibold">HACP™</span>{" "}
                (Hierarchical Adaptive Cognitive Processing) protected under{" "}
                <span className="font-semibold">U.S. Patent 10,290,222</span>{" "}
                and additional patent-pending technologies.
              </p>
            </div>

            {/* Infrastructure */}
            <div>
              <p className="text-white/70 text-sm">
                Infrastructure powered by{" "}
                <span className="neon-blue font-semibold">
                  Azure Cognitive Services
                </span>{" "}
                • <span className="neon-blue font-semibold">OpenAI GPT-4o</span>{" "}
                • <span className="text-white/80">Supabase</span> •{" "}
                <span className="text-white/80">Vercel Edge</span>
              </p>
            </div>

            {/* Security */}
            <div>
              <p className="text-white/70 text-sm">
                Built with enterprise-grade security:{" "}
                <span className="neon-green font-semibold">
                  AES-256 encryption
                </span>{" "}
                •{" "}
                <span className="neon-green font-semibold">
                  SOC 2 compliance
                </span>{" "}
                •{" "}
                <span className="neon-green font-semibold">
                  Elite Security Architecture
                </span>
              </p>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm mb-2">
                © 2025 Saint Vision Group LLC. All rights reserved. Delaware
                Limited Partnership.
              </p>
              <p className="text-white/50 text-xs">
                <span className="neon-green">GDPR</span> •{" "}
                <span className="neon-green">CCPA</span> •{" "}
                <span className="neon-green">SOC 2 Compliant</span> •{" "}
                <span className="text-[#FACC15]">Faith-Aligned Technology</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Index() {
  return <FallbackHomepage />;
}
