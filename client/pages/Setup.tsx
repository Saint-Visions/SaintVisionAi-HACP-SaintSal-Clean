import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Setup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-white bg-black space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5" />
        <Link to="/" className="text-yellow-400 underline hover:text-yellow-300">
          Back to home
        </Link>
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          SAINTSAL™ Setup Wizard 🚀
        </h1>
        <p className="text-sm mt-2 text-gray-300 max-w-md">
          Let’s get your platform divine and live. Your enterprise AI infrastructure is ready to dominate.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 w-full max-w-sm">
        <button
          onClick={() => (window.location.href = "/signup")}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
        >
          🔥 Start Your Journey
        </button>

        <button
          onClick={() => (window.location.href = "/partnertech")}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
        >
          🧠 Enterprise Setup
        </button>
      </div>
    </div>
  );
}
