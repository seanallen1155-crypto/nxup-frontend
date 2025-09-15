"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// Components
import { PrimaryCTAButton } from "@/components/ui/actions/PrimaryCTAButton";
import OnboardingHeader from "@/components/ui/header/OnboardingHeader";
import { BrowserFooter } from "@/components/ui/footer/BrowserFooter";

export default function LandingPage() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between"
      style={{
        backgroundColor: "#000000", // fallback behind image
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
          height: "60vh",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Header (nav + logo + menu) */}
      <OnboardingHeader />

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
            color: "#FFFFFF",
            textTransform: "uppercase",
            textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          Your Story, Your Stage, Your NIL
        </h1>

        {/* Subtext */}
        <p
          style={{
            marginTop: "16px",
            fontFamily: "var(--font-satoshi, sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "135%",
            letterSpacing: "0.01em",
            color: "rgba(255,255,255,0.9)",
            textShadow: "0px 1px 3px rgba(0,0,0,0.4)",
            maxWidth: "80%",
          }}
        >
          Built for all high school athletes to start their NIL journey.
        </p>

        {/* CTA Button */}
        <div style={{ marginTop: "28px" }}>
          <PrimaryCTAButton onClick={() => router.push("/onboarding")}>
            Start my NIL journey
          </PrimaryCTAButton>
        </div>
      </div>

      {/* Footer */}
      <BrowserFooter />
    </section>
  );
}
