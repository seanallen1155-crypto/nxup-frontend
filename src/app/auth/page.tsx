// src/app/auth/page.tsx
"use client";

import { Logo } from "@/components/ui/logo/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SocialButton } from "@/components/ui/SocialButton";

export default function AuthPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-[#006DFF] to-[#0E0E0E] overflow-hidden">
      {/* Logo & tagline */}
      <div className="mt-16 flex flex-col items-center text-center">
        <Logo className="h-12 w-40 mx-auto" priority />
        <p className="mt-2 text-gray-300 font-medium">
          Your name. Your game. Your value.
        </p>
      </div>

      {/* Glass card */}
      <Card className="mt-12 w-[90%] max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20 p-6 space-y-4">
        <SocialButton provider="google" />
        <SocialButton provider="apple" />

        <div className="flex items-center justify-center text-gray-400">
          <span className="text-sm">OR</span>
        </div>

        <Button className="w-full h-12 rounded-xl bg-gray-900/70 text-white backdrop-blur-sm border border-white/10 hover:bg-gray-900">
          Log In with Email
        </Button>

        <Button className="w-full h-12 rounded-xl bg-[#006DFF] text-white hover:bg-[#006DFF]/90 focus:ring-2 focus:ring-[#C6FF45]">
          Create New Account
        </Button>
      </Card>
    </main>
  );
}
