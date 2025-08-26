"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashLogo from "@/components/ui/logo/SplashLogo";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/simple"); // 👈 routes to MVP login/signup
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative h-screen bg-gradient-to-br from-[#006DFF] to-[#0E0E0E] overflow-hidden">
      {/* Background animation */}
      <BackgroundEffects />

      {/* Absolutely centered logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <SplashLogo />
      </div>
    </div>
  );
}

