"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashLogo from "@/components/ui/logo/SplashLogo";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/simple");  // 👈 now routes to MVP login/signup
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-[#006DFF] to-[#0E0E0E] overflow-hidden">
      {/* Background animation */}
      <BackgroundEffects />

      {/* Centered logo */}
      <div className="relative z-10 flex flex-col items-center">
        <SplashLogo />
      </div>
    </div>
  );
}
