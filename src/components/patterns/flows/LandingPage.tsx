"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ added
import { CaretRight } from "@phosphor-icons/react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // ✅ hook for navigation

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between"
      style={{
        backgroundColor: "#000000", // TODO: promote to tokens (fallback bg behind image)
      }}
    >
      {/* Background image */}
      <Image
        src="/images/landing/hero-athlete-v2.jpg"
        alt="High school athlete hero background"
        fill
        priority
        className="object-cover object-[60%] md:object-center"
      />

      {/* Left scrim gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)",
          zIndex: 1,
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            div {
              background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0) 30%
              );
            }
          }
        `}</style>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "60vh", // ✅ always extends up ~60% of viewport height
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Header with top scrim + faded logo */}
      <header
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 64px)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 2,
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
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
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
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
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

      {/* Overlay behind drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Nav drawer with animation */}
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
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="self-end p-4 text-white/80 hover:text-white transition-colors duration-200 text-2xl"
        >
          ✕
        </button>

        {/* Nav links */}
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

      {/* Hero text + CTA */}
      <div
        className="absolute left-6 right-6"
        style={{
          top: "25%",
          maxWidth: "65%",
          zIndex: 2,
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-teko), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 8vw, 64px)",
            lineHeight: "100%",
            letterSpacing: "-0.01em",
            color: "var(--text-hero, #FFFFFF)",
            textTransform: "uppercase",
            textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          Your Story, Your Stage, Your NIL
        </h1>

        {/* Subtext */}
        <p
          style={{
            marginTop: "16px", // spacing below headline
            fontFamily: "var(--font-satoshi, sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "135%", // compact but readable
            letterSpacing: "0.01em",
            color: "rgba(255,255,255,0.9)",
            textShadow: "0px 1px 3px rgba(0,0,0,0.4)",
            maxWidth: "80%", // ✅ constrain on smallest viewports
          }}
        >
          Built for all high school athletes to start their NIL journey.
        </p>

        {/* CTA Button */}
        <button
          className="flex items-center justify-center gap-2 rounded-md"
          style={{
            marginTop: "28px", // clear action gap
            padding: "16px 28px", // stronger anchor
            fontFamily: "var(--font-satoshi, sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(16px, 1.5vw, 18px)",
            lineHeight: "140%",
            letterSpacing: "0em",
            color: "#FFFFFF",
            background: "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)",
            textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
            borderRadius: "8px",
            transition: "all 0.2s ease-in-out",
            boxShadow: "0px 4px 12px rgba(255, 90, 31, 0.4)", // stronger depth
          }}
          onClick={() => router.push("/onboarding")} // ✅ wired to onboarding
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(90deg, #FF7A3F 0%, #FF5A1F 100%)"; // lighter hover
            e.currentTarget.querySelector("svg")!.style.transform =
              "translateX(4px)"; // chevron shift
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)";
            e.currentTarget.querySelector("svg")!.style.transform =
              "translateX(0)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.97)"; // active compress
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = "2px solid rgba(255,255,255,0.6)";
            e.currentTarget.style.outlineOffset = "2px";
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = "none";
          }}
          disabled={false}
        >
          Start my NIL journey
          <CaretRight
            size={20}
            weight="bold"
            color="#FFFFFF"
            aria-hidden="true"
            style={{ transition: "transform 0.2s ease-in-out" }}
          />
        </button>
      </div>
    </section>
  );
}
