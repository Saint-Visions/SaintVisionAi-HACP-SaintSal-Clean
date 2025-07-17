import React from "react";
import BuilderPage from "../components/BuilderPage";
import DivineHero from "../components/DivineHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield } from "lucide-react";

// Fallback content if Builder.io doesn't have content
const FallbackHomepage = () => (
  <div className="relative">
    {/* Divine Hero Section */}
    <DivineHero
      variant="homepage"
      title="SaintSal™"
      subtitle="Inside these walls, AI doesn't just answer. It adapts. It empowers. It becomes yours."
      showCTA={true}
    />

    {/* Features Preview - Divine Prestige */}
    <section className="py-20 px-8 openai-premium">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4 prestige-text">
            Enterprise AI, Simplified
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            From free trial to full enterprise - scale at your own pace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dual AI Console */}
          <div className="divine-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-serif text-foreground mb-4 prestige-text">
              Dual AI Console
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              GPT-4o + Azure Cognitive Services working in perfect
              synchronization. Real-time cognition with 24/7 reliability.
            </p>
            <Link to="/console">
              <Button className="saintsal-glow">Try Console</Button>
            </Link>
          </div>

          {/* PartnerTech CRM */}
          <div className="divine-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-serif text-foreground mb-4 prestige-text">
              PartnerTech CRM
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              Enterprise CRM integration with AI-powered automation. Chrome
              extension included for seamless workflow.
            </p>
            <Link to="/partnertech">
              <Button className="saintsal-glow">Learn More</Button>
            </Link>
          </div>

          {/* Divine Security */}
          <div className="divine-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-serif text-foreground mb-4 prestige-text">
              Divine Security
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              Enterprise-grade encryption with values-first architecture. Your
              data protected by moral and technical excellence.
            </p>
            <Link to="/privacy">
              <Button className="saintsal-glow">Security Details</Button>
            </Link>
          </div>
        </div>

        {/* Prestige Quote */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F112bfce7b7214cfaa5a7d0a6837c4495?format=webp&width=600"
            alt="Cookin' Knowledge"
            className="w-32 h-24 mx-auto mb-6 opacity-80"
          />
          <p className="text-2xl font-light text-primary/80 italic">
            "Ready to move smarter today than you did yesterday?"
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default function Index() {
  return (
    <BuilderPage
      model="page"
      chatMode="companion"
      showHeader={false}
      showFooter={false}
      fallback={<FallbackHomepage />}
    />
  );
}
