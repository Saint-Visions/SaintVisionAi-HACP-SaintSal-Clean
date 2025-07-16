import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Why() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/ecb797766f42592dddf70913a1ed92a7500a244f?width=3386)",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-[60vh] md:h-[75vh] flex flex-col items-center justify-center p-4 md:p-8 text-center">
          <h1 className="text-3xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg mb-4 md:mb-6 tracking-tight">
            saintsal™ + you
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl font-light leading-relaxed px-4">
            Where Divine Execution Meets Real-World Results.
          </p>
          <Button
            onClick={() => (window.location.href = "/signup")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl shadow-2xl shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
          >
            I'm Ready to Use Real AI
          </Button>
        </section>

        {/* What Separates Us Section */}
        <section className="py-12 md:py-24 bg-black/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-white mb-3 md:mb-6 tracking-tight">
                What Separates Us?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto">
                Heard of ChatGPT? Here's what actually works.
              </p>
            </div>

            <div className="grid gap-12 max-w-5xl mx-auto">
              {/* Real Talk Section */}
              <div className="bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  "I've Heard of ChatGPT… but What Do I Do With It?"
                </h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  Other platforms throw you in and say "Good luck."
                  <br />
                  <strong className="text-white">
                    SAINTSAL™ walks with you like a real assistant.
                  </strong>{" "}
                  Just talk like a friend — no prompts, no learning curve.
                </p>
              </div>

              {/* HACP Section */}
              <div className="bg-black/60 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-blue-400 mb-6">
                  The Secret Sauce: HACP™
                </h3>
                <p className="text-gray-300 text-xl font-light leading-relaxed mb-6">
                  HACP isn't just tech jargon — it's what makes SaintSal™
                  intelligent.
                </p>

                {/* Technical Foundation */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    The Foundation:
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Two brains (GPT + Azure) work together</li>
                    <li>They verify each other's answers</li>
                    <li>You get clean, confident responses</li>
                    <li>Zero hallucinations through dual-validation</li>
                  </ul>
                </div>

                {/* The Real Magic */}
                <div className="border-t border-blue-400/20 pt-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">
                    But Here's the REAL Magic:
                  </h4>
                  <p className="text-white text-lg font-medium leading-relaxed mb-4">
                    SaintSal learns what YOU need to build — a business, a
                    resume, a family schedule, or an empire — and actually{" "}
                    <strong className="text-yellow-400">GETS IT DONE.</strong>
                  </p>

                  <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-6 mb-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      <strong className="text-white">
                        While you search and learn
                      </strong>
                      , your SaintSal cognitive companion adapts with you
                      everywhere you go:
                    </p>
                    <ul className="list-none space-y-2 mt-4 text-gray-300">
                      <li>
                        🎤 <strong>Voice</strong> - Natural conversations
                      </li>
                      <li>
                        📱 <strong>Mobile</strong> - Always in your pocket
                      </li>
                      <li>
                        🌐 <strong>Chrome Extension</strong> - Sticky, always
                        working
                      </li>
                      <li>
                        ⚡ <strong>Real Action</strong> - Not just advice, but
                        execution
                      </li>
                    </ul>
                  </div>

                  <p className="text-yellow-400 text-xl font-bold text-center">
                    Continue to grow your vision without limitation. 🚀
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-black/60 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-green-400 mb-6 text-center">
                  SaintSal™ vs. The Rest
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 text-yellow-400">
                      <tr>
                        <th className="p-4 text-lg font-semibold">Feature</th>
                        <th className="p-4 text-lg font-semibold">
                          Other AI Bots 🤖
                        </th>
                        <th className="p-4 text-lg font-semibold">
                          SAINTSAL™ 🔥
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-white/10">
                        <td className="p-4 font-medium">Dual Engine</td>
                        <td className="p-4">❌ Single AI</td>
                        <td className="p-4 text-green-400">✅ GPT-4 + Azure</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="p-4 font-medium">Built-in Support</td>
                        <td className="p-4">❌ Good luck</td>
                        <td className="p-4 text-green-400">
                          ✅ 24/7 SuperSAL™
                        </td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="p-4 font-medium">CRM Tools</td>
                        <td className="p-4">❌ None</td>
                        <td className="p-4 text-green-400">
                          ✅ Lead + task routing
                        </td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="p-4 font-medium">Actions</td>
                        <td className="p-4">❌ Just chat</td>
                        <td className="p-4 text-green-400">
                          ✅ Scheduling, Forms, CRM
                        </td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="p-4 font-medium">Understands You</td>
                        <td className="p-4">❌ Generic responses</td>
                        <td className="p-4 text-green-400">
                          ✅ Learns your biz + goals
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* No Team Section */}
              <div className="bg-black/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  No Team? No Problem.
                </h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                  You don't need to be tech-savvy or learn AI.
                  <br />
                  <strong className="text-white">
                    You just need to show up. SAINTSAL™ will handle the rest.
                  </strong>
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Need help? 📬 support@saintvisionai.com
                </p>
                <Button
                  onClick={() => (window.location.href = "/signup")}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-10 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Now I Get It — Let's Go
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Real Examples Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Real Examples
              </h2>
              <p className="text-gray-300 text-xl font-light">
                See SAINTSAL™ in action across different industries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Athena */}
              <div className="bg-black/60 backdrop-blur-xl border border-green-400/30 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-green-400 mb-3">
                  Athena
                </h4>
                <p className="text-gray-300 text-sm font-light">
                  Elder care & medical support automation
                </p>
              </div>

              {/* SVG */}
              <div className="bg-black/60 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">
                  SVG
                </h4>
                <p className="text-gray-300 text-sm font-light">
                  Finance + real estate automation
                </p>
              </div>

              {/* PartnerTech.ai */}
              <div className="bg-black/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">
                  PartnerTech.ai
                </h4>
                <p className="text-gray-300 text-sm font-light">
                  Chrome Extension + CRM outreach
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Ready to Experience Real AI?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "/signup")}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-10 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Roll
              </Button>
              <Button
                onClick={() => (window.location.href = "/pricing")}
                className="bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-10 py-4 rounded-xl text-lg transition-all duration-300"
              >
                See Plans
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
