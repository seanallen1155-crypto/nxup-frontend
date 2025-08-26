// src/app/onboarding/name/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import OnboardingProgress from "@/components/ui/OnboardingProgress";
import PulseWrapper from "@/components/ui/PulseWrapper";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "500" });

export default function OnboardingNamePage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [touched, setTouched] = useState({ first: false, last: false });
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const isValid = firstName.trim().length > 0 && lastName.trim().length > 0;

  return (
    <OnboardingLayout>
      <div className="flex flex-col min-h-screen px-6">
        {/* Progress Tracker */}
        <div className="flex justify-center pt-6 pb-2">
          <OnboardingProgress currentStep={2} totalSteps={6} />
        </div>

        {/* Headline + Subheadline */}
        <div className="mb-6">
          <h1 className={`${bebas.className} text-white text-5xl drop-shadow-lg`}>
            What’s Your Name?
          </h1>
          <p className={`${inter.className} text-white/80 text-base mt-2`}>
            We need your full name to set up your NIL profile and start building your brand.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          {/* First Name */}
          <PulseWrapper isActive={activeInput === "first"}>
            <div>
              <label className="block text-white/80 text-sm mb-1">First Name</label>
              <input
                id="first"
                type="text"
                value={firstName}
                onFocus={() => setActiveInput("first")}
                onBlur={() => {
                  setTouched((t) => ({ ...t, first: true }));
                  setActiveInput(null);
                }}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className={`w-full px-4 py-3 rounded-xl 
                           bg-white/10 backdrop-blur-md border 
                           text-white font-bold placeholder-gray-500 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-500
                           ${
                             touched.first && !firstName
                               ? "border-red-500 focus:ring-red-500"
                               : "border-white/20"
                           }`}
              />
              {touched.first && !firstName && (
                <p className="text-sm text-red-400 mt-1">
                  We need your first name to set up your NIL profile.
                </p>
              )}
            </div>
          </PulseWrapper>

          {/* Last Name */}
          <PulseWrapper isActive={activeInput === "last"}>
            <div>
              <label className="block text-white/80 text-sm mb-1">Last Name</label>
              <input
                id="last"
                type="text"
                value={lastName}
                onFocus={() => setActiveInput("last")}
                onBlur={() => {
                  setTouched((t) => ({ ...t, last: true }));
                  setActiveInput(null);
                }}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className={`w-full px-4 py-3 rounded-xl 
                           bg-white/10 backdrop-blur-md border 
                           text-white font-bold placeholder-gray-500 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-500
                           ${
                             touched.last && !lastName
                               ? "border-red-500 focus:ring-red-500"
                               : "border-white/20"
                           }`}
              />
              {touched.last && !lastName && (
                <p className="text-sm text-red-400 mt-1">
                  We need your last name to set up your NIL profile.
                </p>
              )}
            </div>
          </PulseWrapper>

          {/* Preferred Name */}
          <PulseWrapper isActive={activeInput === "preferred"}>
            <div>
              <label className="block text-white/80 text-sm mb-1">
                Nickname <span className="text-white/50">(optional)</span>
              </label>
              <input
                id="preferred"
                type="text"
                value={preferredName}
                onFocus={() => setActiveInput("preferred")}
                onBlur={() => setActiveInput(null)}
                onChange={(e) => setPreferredName(e.target.value)}
                placeholder="Enter a nickname (if you have one)"
                className="w-full px-4 py-3 rounded-xl 
                           bg-white/10 backdrop-blur-md border border-white/20 
                           text-white font-bold placeholder-gray-500 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </PulseWrapper>
        </div>

        {/* CTA pinned bottom */}
        <div className="mt-6 mb-6">
          <button
            disabled={!isValid}
            onClick={() => router.push("/onboarding/birthday")}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition
              ${
                isValid
                  ? "bg-gradient-to-r from-[#006DFF] to-[#6C63FF] text-white"
                  : "bg-gray-700/50 text-white/40 cursor-not-allowed"
              }`}
          >
            Next →
          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
