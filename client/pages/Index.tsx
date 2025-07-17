import React from "react";
import BuilderPage from "../components/BuilderPage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Brain, Chrome, Lock } from "lucide-react";

// Native High-Level Homepage - Content from Screenshots
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
    {/* Clean overlay */}
    <div className="absolute inset-0 bg-black/60 z-0" />

    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* SaintSal Logo */}
          <div className="mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F032bb6b4632e4a3ca4a41a4996df0d8f?format=webp&width=400"
              alt="SaintSal™"
              className="w-20 h-20 mx-auto mb-8 saintsal-brain"
            />
          </div>

          {/* Main Title */}
          <h1
            className="text-7xl md:text-8xl mb-6 tracking-tight"
            style={{
              fontFamily: "DM Serif Display, serif",
              background:
                "linear-gradient(135deg, rgb(250, 204, 21) 0%, rgba(250, 204, 21, 0.8) 50%, rgb(250, 204, 21) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SaintSal™
          </h1>

          {/* Tagline */}
          <p
            className="text-2xl md:text-3xl mb-12 tracking-wide"
            style={{
              fontFamily: "DM Serif Display, serif",
              color: "rgb(250, 204, 21)",
            }}
          >
            Cookin' Knowledge
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-xl font-medium rounded-xl">
                Start Cookin' Knowledge
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="border border-white/30 text-white hover:bg-white/10 px-12 py-4 text-xl font-medium rounded-xl backdrop-blur-sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Intelligence Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-5xl mb-6"
            style={{
              fontFamily: "DM Serif Display, serif",
              color: "white",
            }}
          >
            Enterprise Intelligence
          </h2>
          <p className="text-xl text-white/70 mb-16 max-w-3xl mx-auto font-light">
            Professional-grade AI infrastructure with dual-engine redundancy,
            faith-aligned policies, and enterprise-scale reliability.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3
                className="text-xl text-white mb-3"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Dual AI Console
              </h3>
              <p className="text-white/60 font-light">
                GPT-4o + Azure working in perfect synchronization
              </p>
            </div>
            <div className="text-center p-8">
              <Chrome className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3
                className="text-xl text-white mb-3"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                PartnerTech CRM
              </h3>
              <p className="text-white/60 font-light">
                Chrome extension + enterprise automation
              </p>
            </div>
            <div className="text-center p-8">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3
                className="text-xl text-white mb-3"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Divine Security
              </h3>
              <p className="text-white/60 font-light">
                Faith-aligned data protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Console Layout */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Console */}
            <div className="divine-card p-8 rounded-2xl">
              <div className="text-center mb-6">
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  AI Console
                </h3>
                <div className="bg-black/60 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">AI</span>
                    </div>
                    <span className="text-white">SaintSal Assistant</span>
                  </div>
                  <p className="text-white/70 text-left text-sm">
                    Ready to help with your business intelligence needs. What
                    would you like to accomplish today?
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <div className="text-primary text-sm">• Lead generation</div>
                  <div className="text-primary text-sm">• CRM automation</div>
                  <div className="text-primary text-sm">• Data analysis</div>
                </div>
              </div>
            </div>

            {/* Right Console */}
            <div className="divine-card p-8 rounded-2xl">
              <div className="text-center mb-6">
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  PartnerTech CRM
                </h3>
                <div className="bg-black/60 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Chrome className="w-6 h-6 text-primary" />
                    <span className="text-white">Chrome Extension</span>
                  </div>
                  <p className="text-white/70 text-left text-sm">
                    Seamlessly integrates with your existing workflow. Capture
                    leads, automate follow-ups, and scale your outreach.
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <div className="text-primary text-sm">• Lead capture</div>
                  <div className="text-primary text-sm">• Email automation</div>
                  <div className="text-primary text-sm">
                    • Pipeline management
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith-Aligned Vault */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="divine-card p-12 rounded-2xl">
            <div className="mb-8">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2
                className="text-4xl text-white mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Faith-Aligned Vault
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Secure. Private. Moral. Your conversations, billing data, and
                personal information protected by enterprise-grade encryption
                with values-first architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">Secure Stripe billing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">Role-based authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">Faith-centered data policies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Data Vault */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="divine-card p-12 rounded-2xl text-center">
            <h2
              className="text-4xl text-white mb-8"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Protected Data Vault
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
              <div className="text-left space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Encryption Status</span>
                  <span className="text-primary font-medium">
                    AES-256 Active
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Data Location</span>
                  <span className="text-white">Private Cloud</span>
                </div>
              </div>
              <div className="text-left space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Access Control</span>
                  <span className="text-white">Role-Based</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Ethics Compliance</span>
                  <span className="text-primary font-medium">
                    Faith-Aligned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="divine-card p-12 rounded-2xl mb-12">
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Ready to Experience Divine AI?
            </h2>
            <p className="text-white/70 text-xl mb-8">
              Join thousands of professionals who trust SaintSal™ for their
              business intelligence needs.
            </p>
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-xl font-medium rounded-xl saintsal-glow">
                Start Cookin' Knowledge
              </Button>
            </Link>
          </div>

          <p className="text-white/40 text-sm">
            © 2024 SaintVisionAI. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default function Index() {
  return <FallbackHomepage />;
}
