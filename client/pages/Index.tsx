import React from "react";
import BuilderPage from "../components/BuilderPage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield } from "lucide-react";

// Divine Homepage - Exact Layout Flow with One Parallax Background
const FallbackHomepage = () => (
  <div
    className="min-h-screen relative"
    style={{
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      backgroundImage:
        "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Divine overlay for perfect readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/85 to-charcoal/90 z-0" />

    <div className="relative z-10">
      {/* Section One - Exact Layout from First Image */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
        {/* Main Logo */}
        <div className="mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4bafe18e513045228cec488725e6bd5e?format=webp&width=800"
            alt="SaintSal™ Divine Logo"
            className="w-32 h-32 mx-auto mb-6 saintsal-brain"
          />
        </div>

        {/* Hero Title - Divine Typography */}
        <h1
          className="text-6xl md:text-8xl mb-6 tracking-tight cinematic-fade"
          style={{
            fontFamily: "DM Serif Display, serif",
            background:
              "linear-gradient(135deg, rgb(250, 204, 21) 0%, rgba(250, 204, 21, 0.8) 50%, rgb(250, 204, 21) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 20px rgba(250, 204, 21, 0.3)",
          }}
        >
          SaintSal™
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl font-light leading-relaxed">
          Inside these walls, AI doesn't just answer. It adapts. It empowers. It
          becomes yours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 text-xl font-medium rounded-2xl saintsal-glow">
              Start Cookin' Knowledge
            </Button>
          </Link>
          <Link to="/pricing">
            <Button className="border border-primary/30 text-primary hover:bg-primary/10 px-10 py-4 text-xl font-medium rounded-2xl backdrop-blur-sm">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Divine Quote */}
        <p className="text-lg text-primary/80 font-light italic max-w-2xl">
          "Ready to move smarter today than you did yesterday?"
        </p>
      </section>

      {/* Section Two - Following Layout from Second Image */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Febbdf8d3645e4aac938a960a58c198dc?format=webp&width=800"
            alt="Divine Features Overview"
            className="w-full h-auto max-w-4xl mx-auto mb-16 rounded-xl divine-card"
          />

          <h2
            className="text-4xl md:text-5xl mb-6 prestige-text"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Enterprise AI, Simplified
          </h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto">
            From free trial to full enterprise - scale at your own pace
          </p>
        </div>
      </section>

      {/* Section Three - Layout from Third & Fourth Images */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Left Feature */}
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F1a91dbc02b744270bc0cfbe5229a2d82?format=webp&width=800"
                alt="Dual AI Console"
                className="w-full h-auto rounded-xl divine-card mb-6"
              />
              <h3
                className="text-2xl font-medium text-white mb-4 prestige-text"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Dual AI Console
              </h3>
              <p className="text-white/60 font-light">
                GPT-4o + Azure working in perfect synchronization
              </p>
            </div>

            {/* Right Feature */}
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fd1fc5649c7e145e299ac0589b7782313?format=webp&width=800"
                alt="PartnerTech CRM"
                className="w-full h-auto rounded-xl divine-card mb-6"
              />
              <h3
                className="text-2xl font-medium text-white mb-4 prestige-text"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                PartnerTech CRM
              </h3>
              <p className="text-white/60 font-light">
                Chrome extension + enterprise automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Four - Layout from Fifth Image */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F46222c772c0d40b6930aeca8f8b1b0c6?format=webp&width=800"
            alt="Divine Security Features"
            className="w-full h-auto max-w-4xl mx-auto mb-12 rounded-xl divine-card"
          />

          <h2
            className="text-3xl md:text-4xl mb-6 prestige-text"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Faith-Aligned Vault
          </h2>
          <p className="text-lg text-white/60 font-light max-w-3xl mx-auto mb-8">
            Secure. Private. Moral. Your conversations, billing data, and
            personal information protected by enterprise-grade encryption with
            values-first architecture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-white/70">End-to-end encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-white/70">Secure Stripe billing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-white/70">Role-based authentication</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-white/70">
                Faith-centered data policies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Five - Final Layout from Sixth Image */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fce460512dd614adfa8d4cbd0bca37934?format=webp&width=800"
            alt="Protected Data Vault"
            className="w-full h-auto max-w-4xl mx-auto mb-12 rounded-xl divine-card"
          />

          <h2
            className="text-3xl md:text-4xl mb-6 prestige-text"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Protected Data Vault
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-left space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Encryption Status</span>
                <span className="text-primary font-medium">AES-256 Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Data Location</span>
                <span className="text-white/90">Private Cloud</span>
              </div>
            </div>
            <div className="text-left space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Access Control</span>
                <span className="text-white/90">Role-Based</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Ethics Compliance</span>
                <span className="text-primary font-medium">Faith-Aligned</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-xl font-medium rounded-2xl saintsal-glow">
                Experience Divine AI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default function Index() {
  // Show the divine content directly
  return <FallbackHomepage />;
}
