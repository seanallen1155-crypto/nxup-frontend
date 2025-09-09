// src/components/patterns/LandingPage.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./LandingPage.module.css";

// 👇 Import the flow
import { EligibilityFlow } from "@/features/onboarding/EligibilityFlow";

export function LandingPage() {
  const [showFlow, setShowFlow] = useState(false);

  // If user has started onboarding, show flow instead of landing hero
  if (showFlow) {
    return <EligibilityFlow />;
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background image */}
      <Image
        src="/images/landing/athlete.png" 
        alt="Athlete background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.55,
          background:
            "linear-gradient(180deg, #0D0D0D 10%, #1E1E1E 35%, #1E1E1E 65%, #0D0D0D 100%)",
        }}
        aria-hidden="true"
      />

      {/* Logo (top-left) */}
      <div className="absolute top-6 left-6 z-10">
        <Image
          src="/images/logos/logo-dark.svg"   // ✅ updated path
          alt="App logo"
          width={301}
          height={40}
          className="h-10 w-auto max-w-[200px] sm:max-w-[301px]"
          priority
        />
      </div>

      {/* Hero Card */}
      <div
        className={`${styles.heroCard} absolute left-1/2 -translate-x-1/2 z-10
                    w-[90vw] max-w-[1065px] rounded-md px-lg py-xl`}
        style={{ top: "53vh" }}
      >
        {/* Hero Statement */}
        <h1
          className="font-serif font-semibold text-center leading-tight mt-4 relative z-10"
          style={{ fontSize: "26px", lineHeight: "1.2", color: "#FFFFFF" }}
        >
          Your NIL Journey
          <br />
          Starts Here
        </h1>

        {/* Sub-text */}
        <p
          className="font-primary text-center font-normal relative z-10"
          style={{
            fontSize: "15px",
            lineHeight: "1.3",
            color: "#B3B3B3",
            marginTop: "10px",
          }}
        >
          Built for high school athletes.
          <br />
          Free, supportive, and always in your control.
        </p>

        {/* CTA Button */}
        <div
          className="flex justify-center relative z-10"
          style={{ marginTop: "24px", marginBottom: "8px" }}
        >
          <button
            className="font-primary font-extrabold tracking-tight rounded-md"
            style={{
              fontSize: "16px",
              padding: "8px 24px",
              backgroundColor: "#FF5A1F",
              color: "#FFFFFF",
              border: "none",
            }}
            onClick={() => setShowFlow(true)} // 👈 Triggers the onboarding flow
          >
            Start my NIL journey
          </button>
        </div>

        {/* Secondary Login Link */}
        <p
          className="font-primary text-center font-light mb-4 relative z-10 text-gray-400"
          style={{
            fontSize: "12px",
            lineHeight: "1.3",
            marginTop: "8px",
          }}
        >
          Already a user?{" "}
          <span className="font-semibold cursor-pointer">Login</span>
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 z-10">
        <nav className="flex justify-center space-x-6 text-xs sm:text-sm text-gray-400">
          <Link href="/terms" className="hover:text-brand-accent">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-brand-accent">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-brand-accent">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
