import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  Sparkles,
  Crown,
  Zap,
  Shield,
  User,
  Mail,
  Lock,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();

  const isSignup = location.pathname === "/signup";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isSignup) {
        // Validation
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setIsLoading(false);
          return;
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          setIsLoading(false);
          return;
        }

        const { error } = await signUp(email, password, fullName);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(
            "Account created! Check your email to verify your account.",
          );
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength validation
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthColors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        fontFamily:
          "Gotham, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced Divine Overlays */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70 z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-2" />

      {/* Floating Gold Particles Animation */}
      <div className="absolute inset-0 overflow-hidden z-3">
        <div className="animate-pulse absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
        <div
          className="animate-pulse absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/3 left-1/5 w-1 h-1 bg-yellow-400 rounded-full opacity-50"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="animate-pulse absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-40"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          {/* Divine Back to Home */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">
              Back to Sanctuary
            </span>
          </Link>

          {/* Divine Main Card */}
          <Card className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 shadow-2xl shadow-yellow-400/20 rounded-2xl overflow-hidden relative">
            {/* Animated Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-pulse rounded-2xl"></div>

            <CardHeader className="text-center space-y-6 relative pb-6">
              {/* Divine Logo Section */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2"
                    alt="SAINTSAL™ Circuit Board Logo"
                    className="relative w-24 h-24 rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>

              {/* Divine Branding */}
              <div>
                <div className="text-white text-sm font-light uppercase tracking-[0.4em] mb-3 opacity-90">
                  SAINTSAL™
                </div>
                <div className="text-yellow-400 text-xl font-semibold tracking-wide mb-2">
                  SaintVisionAI™
                </div>
                <div className="text-yellow-300/80 text-sm font-light tracking-wider">
                  Cookin' Knowledge
                </div>
              </div>

              <CardTitle className="text-4xl font-bold relative">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                  {isSignup ? "Join the Divine" : "Welcome Back"}
                </span>
                <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-yellow-400 animate-spin" />
              </CardTitle>

              <p className="text-gray-300 text-lg font-light leading-relaxed">
                {isSignup ? (
                  <>
                    Enter the{" "}
                    <span className="text-yellow-400 font-medium">
                      AI sanctuary
                    </span>{" "}
                    and unlock divine knowledge
                  </>
                ) : (
                  <>
                    Enter your divine credentials to access the{" "}
                    <span className="text-yellow-400 font-medium">
                      AI sanctuary
                    </span>
                  </>
                )}
              </p>
            </CardHeader>

            <CardContent className="space-y-6 px-8 pb-8">
              {/* Error/Success Messages */}
              {error && (
                <Alert className="border border-red-400/40 bg-red-500/20 backdrop-blur-sm rounded-xl">
                  <AlertDescription className="text-red-300 flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-medium">{error}</span>
                  </AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border border-green-400/40 bg-green-500/20 backdrop-blur-sm rounded-xl">
                  <AlertDescription className="text-green-300 flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-medium">{success}</span>
                  </AlertDescription>
                </Alert>
              )}

              {/* Divine Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {isSignup && (
                  <div className="space-y-3">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-yellow-400" />
                      Full Name
                    </Label>
                    <div className="relative group">
                      <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-5 py-4 border-2 border-yellow-400/30 bg-black/60 backdrop-blur-sm rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 font-medium"
                        placeholder="Your divine name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-yellow-400" />
                    Email Address
                  </Label>
                  <div className="relative group">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-4 border-2 border-yellow-400/30 bg-black/60 backdrop-blur-sm rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 font-medium"
                      placeholder="saint@saintvisional.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-yellow-400" />
                    Divine Password
                  </Label>
                  <div className="relative group">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-5 py-4 pr-14 border-2 border-yellow-400/30 bg-black/60 backdrop-blur-sm rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 font-medium"
                      placeholder="Your divine password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Password Strength Indicator for Signup */}
                  {isSignup && password && (
                    <div className="space-y-2">
                      <div className="flex gap-1">
                        {[0, 1, 2, 3].map((index) => (
                          <div
                            key={index}
                            className="h-2 flex-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor:
                                index < passwordStrength
                                  ? strengthColors[passwordStrength - 1]
                                  : "#374151",
                            }}
                          />
                        ))}
                      </div>
                      <p
                        className="text-xs"
                        style={{
                          color:
                            passwordStrength > 0
                              ? strengthColors[passwordStrength - 1]
                              : "#9ca3af",
                        }}
                      >
                        Password strength:{" "}
                        {passwordStrength > 0
                          ? strengthLabels[passwordStrength - 1]
                          : "Enter password"}
                      </p>
                    </div>
                  )}
                </div>

                {isSignup && (
                  <div className="space-y-3">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2"
                    >
                      <Shield className="w-4 h-4 text-yellow-400" />
                      Confirm Password
                    </Label>
                    <div className="relative group">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-5 py-4 pr-14 border-2 border-yellow-400/30 bg-black/60 backdrop-blur-sm rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 font-medium"
                        placeholder="Confirm your divine password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                )}

                {/* Divine Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-black font-bold py-5 rounded-xl shadow-2xl shadow-yellow-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-400/60 disabled:opacity-50 disabled:hover:scale-100 text-lg tracking-wide"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Zap className="w-5 h-5" />
                      <span>
                        {isSignup ? "🚀 Start Cooking" : "🔥 Enter Sanctuary"}
                      </span>
                      <Crown className="w-5 h-5" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                </Button>
              </form>

              {/* Toggle between login/signup */}
              <div className="text-center space-y-3">
                <p className="text-gray-400 text-sm">
                  {isSignup
                    ? "Already have an account?"
                    : "New to SaintVision?"}
                </p>
                <Link
                  to={isSignup ? "/login" : "/signup"}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold tracking-wide transition-colors duration-200 underline decoration-yellow-400/30 hover:decoration-yellow-300"
                >
                  {isSignup ? "Sign In" : "Create Account"}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Divine Footer */}
          <div className="text-center">
            <p
              className="text-xs font-medium tracking-wider"
              style={{ color: "#f9d878", opacity: "0.8" }}
            >
              ✨ Elite AI Sanctuary • Protected by Divine Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
