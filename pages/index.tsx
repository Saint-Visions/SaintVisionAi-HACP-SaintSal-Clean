import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RootIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the client app
    router.replace("/client");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-yellow-400 text-xl">Loading SAINTSAL™...</div>
    </div>
  );
}
