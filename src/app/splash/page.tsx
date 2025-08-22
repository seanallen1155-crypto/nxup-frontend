"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashLogo from "@/components/ui/logo/SplashLogo";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding"); // adjust destination later
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#006DFF]">
      <SplashLogo />
    </div>
  );
}
