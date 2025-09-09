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

      {/* Hero Card (glassmorphic experiment) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10
                  w-[90vw] max-w-[1065px] 
                  rounded-md shadow-lg px-lg py-xl
                  backdrop-blur-md"
        style={{
          top: "56.5vh",
          backgroundColor: "rgba(30, 30, 30, 0.6)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Hero Statement */}
        <h1
          className="font-serif text-center leading-tight mt-4"
          style={{ fontSize: "24px", lineHeight: "1.2", color: "#FFFFFF" }}
        >
          Your NIL Journey
          <br />
          Starts Here
        </h1>

        {/* Sub-text */}
        <p
          className="font-primary text-center font-normal"
          style={{
            fontSize: "15px",
            lineHeight: "1.3",
            color: "#B3B3B3",
            marginTop: "10px",
          }}
        >
          Built for high school athletes like you!
          <br />
          Free, supportive, &amp; always in your control.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center" style={{ marginTop: "24px", marginBottom: "8px" }}>
          <button
            className="font-primary font-bold tracking-tight rounded-md"
            style={{
              fontSize: "16px", // slightly larger than subtext
              padding: "8px 24px",
              backgroundColor: "#FF5A1F", // brand accent
              color: "#FFFFFF",
              border: "none",
            }}
          >
            Start my NIL journey
          </button>
        </div>

        {/* Secondary Login Link */}
        <p
          className="font-primary text-center font-normal mb-4"
          style={{
            fontSize: "12px",
            lineHeight: "1.3",
            color: "#B3B3B3",
            marginTop: "8px",
          }}
        >
          Already an {`{AppName}`} user?{" "}
          <span className="underline cursor-pointer">Login</span>
        </p>
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
