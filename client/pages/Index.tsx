import React from "react";
import BuilderPage from "../components/BuilderPage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield } from "lucide-react";

// Divine Homepage - Exact Layout as Uploaded Images
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
      {/* Hero Section - Exact Layout */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
        {/* Main Logo */}
        <div className="mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fc6e9413e4af34aafb51cff944ec2836b?format=webp&width=800"
            alt="SaintSal™ Divine Logo"
            className="w-24 h-24 mx-auto mb-6 saintsal-brain"
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

      {/* Features Section - Divine Layout */}
      <section
        className="py-20 px-8"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backdropFilter: "blur(40px) saturate(1.5)",
          borderTop: "1px solid rgba(250, 204, 21, 0.15)",
          boxShadow:
            "rgba(0, 0, 0, 0.6) 0px 20px 60px 0px, rgba(250, 204, 21, 0.1) 0px 1px 0px 0px inset, rgba(250, 204, 21, 0.05) 0px 0px 40px 0px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4 prestige-text"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Enterprise AI, Simplified
            </h2>
            <p className="text-xl text-white/60 font-light">
              From free trial to full enterprise - scale at your own pace
            </p>
          </div>

          {/* Features Grid - Divine Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Dual AI Console */}
            <div className="divine-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F3ab89839852645d6ab1cdf0da7eecfff?format=webp&width=800"
                alt="Dual AI Console"
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-pulse"
              />
              <h3
                className="text-xl font-medium text-white mb-4 prestige-text"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Dual AI Console
              </h3>
              <p className="text-white/60 mb-6 font-light">
                GPT-4o + Azure working in perfect synchronization
              </p>
              <Link to="/console">
                <Button className="saintsal-glow">Try Console</Button>
              </Link>
            </div>

            {/* PartnerTech CRM */}
            <div className="divine-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fe1c5b6cf06784f88acdddbf544f4ec6c?format=webp&width=800"
                alt="PartnerTech CRM"
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-pulse"
              />
              <h3
                className="text-xl font-medium text-white mb-4 prestige-text"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                PartnerTech CRM
              </h3>
              <p className="text-white/60 mb-6 font-light">
                Chrome extension + enterprise automation
              </p>
              <Link to="/partnertech">
                <Button className="saintsal-glow">Learn More</Button>
              </Link>
            </div>

            {/* Divine Security */}
            <div className="divine-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbbcfca5c6e9a45a08c61cc95c1b41330?format=webp&width=800"
                alt="Divine Security"
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-pulse"
              />
              <h3
                className="text-xl font-medium text-white mb-4 prestige-text"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Divine Security
              </h3>
              <p className="text-white/60 mb-6 font-light">
                Enterprise-grade protection with moral excellence
              </p>
              <Link to="/privacy">
                <Button className="saintsal-glow">Security Details</Button>
              </Link>
            </div>
          </div>

          {/* Bottom Featured Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F18e7bfbd72bd4d909bbbdda9451d2670?format=webp&width=800"
              alt="Feature 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F18efc59e983c483da056e945425df093?format=webp&width=800"
              alt="Feature 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Feedda806f4414105bf3959310fa35804?format=webp&width=800"
              alt="Feature 3"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F0fd1dba64d964e05bc8c9bdc1a6e157f?format=webp&width=800"
              alt="Feature 4"
              className="w-full h-auto rounded-lg"
            />
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
