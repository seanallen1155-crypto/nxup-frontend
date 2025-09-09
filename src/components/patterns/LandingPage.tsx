"use client";

import Image from "next/image";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background image */}
      <Image
        src="/landing_athlete.png"
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
          src="/logo-dark.svg"
          alt="App logo"
          width={301}
          height={40}
          className="h-10 w-auto max-w-[200px] sm:max-w-[301px]"
          priority
        />
      </div>

      {/* Hero Card (raw styles for placement test, height = content-driven) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{
          top: "56.5vh", // anchored landmark
          width: "90vw",
          maxWidth: "1065px",
          backgroundColor: "#1E1E1E", // raw bg
          borderRadius: "12px", // raw radius
          boxShadow: "0 4px 4px rgba(0,0,0,0.25)", // raw shadow
          padding: "24px", // raw padding
        }}
      >
        <div style={{ textAlign: "center", color: "#B3B3B3" }}>
          Hero Card Placeholder
        </div>
      </div>

      {/* Footer (sticky bottom) */}
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
