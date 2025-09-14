"use client";

import { useState } from "react";
import Image from "next/image";

type OnboardingContainerProps = {
  children?: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
};

export function OnboardingContainer({
  children,
  currentStep = 1,
  totalSteps = 3,
}: OnboardingContainerProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Calculate fill %
  const progress = Math.min(
    100,
    Math.round((currentStep / totalSteps) * 100)
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with blur + scale */}
      <Image
        src="/images/landing/hero-athlete-v2.jpg"
        alt="Onboarding background athlete hero"
        fill
        priority
        className="object-cover object-[60%] md:object-center scale-[1.05]"
        style={{
          filter: "blur(8px)",
        }}
      />

      {/* Left scrim gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade gradient */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "60vh",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Brightness / Contrast overlay */}
      <div
        className="absolute inset-0"
        style={{
          filter: "brightness(0.85) contrast(1.05)",
          zIndex: 2,
        }}
      />

      {/* Header with logo + menu */}
      <header
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 64px)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 3,
        }}
      >
        <Image
          src="/images/logos/NILJourney_Logo_Horizontal_Reverse.svg"
          alt="nil Journey Logo"
          width={160}
          height={40}
          style={{
            height: "clamp(28px, 6vw, 40px)",
            width: "auto",
            opacity: 0.8,
            transition:
              "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "scale(1)";
          }}
          priority
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="p-2"
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            opacity: 0.8,
            transition:
              "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ☰
        </button>
      </header>

      {/* Card container */}
      <div
        className="onboarding-card absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px]"
        style={{
          top: "calc(64px + 24px)",
          height: "clamp(500px, 60vh, 560px)",
          background: "rgba(18,18,18,0.8)",
          borderRadius: "16px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0px 16px 34px rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.035)",
          zIndex: 3,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Progress Bar (track + fill) */}
        <div
          style={{
            position: "relative",
            height: "6px",
            width: "100%",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "3px",
            marginBottom: "12px",
            // overflow: "hidden",  // removed to allow glow (shadow) on fill
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)",
              borderTopLeftRadius: "3px",
              borderBottomLeftRadius: "3px",
              borderTopRightRadius: progress === 100 ? "3px" : "0px",
              borderBottomRightRadius: progress === 100 ? "3px" : "0px",
              transition: "width 0.4s ease",
              boxShadow: "0 0 6px rgba(255,90,31,0.6)", // 👈 glow now visible
            }}
          />
        </div>

        {/* Step label */}
        <div
          style={{
            marginBottom: "24px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
          }}
        >
          Step {currentStep} of {totalSteps}
        </div>

        {/* Step-specific content */}
        <div style={{ flex: 1 }}>{children}</div>
      </div>

      {/* Overlay behind drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Nav drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-sm z-50 flex flex-col p-6 transform transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,20,20,0.8) 0%, rgba(20,20,20,0.6) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="self-end p-4 text-white/80 hover:text-white transition-colors duration-200 text-2xl"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6 mt-8">
          {"Athletes Parents Sponsors".split(" ").map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-[#FF5A1F] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-satoshi, sans-serif)",
                fontWeight: 500,
                fontSize: "18px",
                textDecoration: "none",
                transitionDelay: `${i * 75}ms`,
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
