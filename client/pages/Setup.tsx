import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Setup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black p-10">
      <Link
        to="/"
        className="flex items-center text-sm mb-4 text-yellow-600 hover:text-yellow-700"
      >
        <ArrowLeft className="mr-2" />
        Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-center">
        SAINTSAL™🚀 Setup Wizard
      </h1>

      <p className="text-center max-w-xl text-lg mb-6">
        Let's get your platform divine and live. Your enterprise AI
        infrastructure is ready to dominate.
      </p>

      <a
        href="/signup"
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
      >
        🔥 Start Your Journey
      </a>
    </div>
  );
}
