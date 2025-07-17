import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      // Redirect to dashboard after successful signup
      window.location.href = "/dashboard";
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful SAINTSAL Entrance Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Xff0733af4a2e4a0b8c3ec5843ef9720e)",
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Welcome Message - Top */}
      <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/40 relative">
        <div className="text-center">
          <p className="text-yellow-400 text-lg font-medium mb-1">
            Welcome to the Divine Revolution
          </p>
          <p className="text-yellow-400 text-lg font-medium mb-1">
            Join thousands who've discovered their...
          </p>
          <p className="text-yellow-400 text-2xl font-bold">GOTTA GUY™!</p>
        </div>
        {/* Speech bubble tail */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          {/* Unified Signup Card */}
          <Card className="elite-card mt-6">
            <CardHeader className="text-center space-y-4">
              {/* GOTTA GUY Message at Top */}
              <div className="bg-black/30 rounded-xl p-4 border border-yellow-400/20 mb-4">
                <div className="text-center">
                  <p className="text-yellow-400 text-lg font-medium mb-1">
                    Welcome to the Divine Revolution
                  </p>
                  <p className="text-yellow-400 text-lg font-medium mb-1">
                    Join thousands who've discovered their...
                  </p>
                  <p className="text-yellow-400 text-2xl font-bold">
                    GOTTA GUY™!
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="w-20 h-20 rounded-xl shadow-lg"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Create Your Account
              </CardTitle>
              <p className="text-muted-foreground">
                Enter your sanctuary and unlock divine AI power
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                    placeholder="Enter your divine name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                    placeholder="Create a divine password"
                    required
                    minLength={6}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full gold-shimmer py-3 text-lg font-bold"
                >
                  {loading ? "Creating Account..." : "🚀 Join SAINTSAL™"}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
