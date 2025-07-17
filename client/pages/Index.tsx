import React from "react";
import BuilderPage from "../components/BuilderPage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Divine Homepage - Using Exact Uploaded Images as Content
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
    <div className="absolute inset-0 bg-gradient-to-br from-charcoal/75 via-charcoal/80 to-charcoal/85 z-0" />

    <div className="relative z-10">
      {/* Section One - Hero with Logo */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-4xl mx-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4bafe18e513045228cec488725e6bd5e?format=webp&width=800"
            alt="SaintSal™ Hero"
            className="w-full h-auto max-w-2xl mx-auto divine-card rounded-2xl"
          />
        </div>
      </section>

      {/* Section Two - Following Layout */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Febbdf8d3645e4aac938a960a58c198dc?format=webp&width=800"
            alt="Enterprise Features"
            className="w-full h-auto max-w-5xl mx-auto divine-card rounded-2xl"
          />
        </div>
      </section>

      {/* Section Three - Dual Features */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F1a91dbc02b744270bc0cfbe5229a2d82?format=webp&width=800"
                alt="Dual AI Console"
                className="w-full h-auto divine-card rounded-2xl"
              />
            </div>
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fd1fc5649c7e145e299ac0589b7782313?format=webp&width=800"
                alt="PartnerTech CRM"
                className="w-full h-auto divine-card rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Four - Security Features */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F46222c772c0d40b6930aeca8f8b1b0c6?format=webp&width=800"
            alt="Faith-Aligned Vault"
            className="w-full h-auto max-w-5xl mx-auto divine-card rounded-2xl"
          />
        </div>
      </section>

      {/* Section Five - Protected Data */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fce460512dd614adfa8d4cbd0bca37934?format=webp&width=800"
            alt="Protected Data Vault"
            className="w-full h-auto max-w-5xl mx-auto divine-card rounded-2xl"
          />
        </div>
      </section>

      {/* Section Six - Final Gorgeous Footer */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F99356cf9e8bb49e08c65840ed3dd2360?format=webp&width=800"
                alt="Footer Section 1"
                className="w-full h-auto divine-card rounded-2xl"
              />
            </div>
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fabfeede56dff4877aa4fd742ad2e77ad?format=webp&width=800"
                alt="Footer Section 2"
                className="w-full h-auto divine-card rounded-2xl"
              />
            </div>
          </div>

          {/* Final Footer - Clean & Refined */}
          <div className="text-center mt-20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fafaafac07c1f4617b1c7c6f73b70e8a0?format=webp&width=800"
              alt="SaintSal Footer"
              className="w-full h-auto max-w-4xl mx-auto divine-card rounded-2xl mb-12"
            />

            {/* Clean CTA */}
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105">
                Start Cookin' Knowledge
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default function Index() {
  return <FallbackHomepage />;
}
