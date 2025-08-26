// src/app/onboarding/birthday/page.tsx
"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import OnboardingProgress from "@/components/ui/OnboardingProgress";
import PulseWrapper from "@/components/ui/PulseWrapper";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "500" });

export default function OnboardingBirthdayPage() {
  const router = useRouter();

  // DOB segmented fields
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const monthRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");
  const [blocked, setBlocked] = useState<"tooYoung" | "college" | "middleschool" | null>(null);

  const pad2 = (val: string) => (val.length === 1 ? `0${val}` : val);

  const buildDob = () => {
    if (!month || !day || !year) return null;
    return `${pad2(month)}/${pad2(day)}/${year}`;
  };

  const calculateAge = () => {
    const dobStr = buildDob();
    if (!dobStr) return null;
    const [mm, dd, yyyy] = dobStr.split("/").map(Number);
    const today = new Date();
    const birthDate = new Date(yyyy, mm - 1, dd);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleNext = () => {
    setError("");
    const age = calculateAge();

    if (!age || !grade) return;

    // ❌ Under 13
    if (age < 13) {
      setBlocked("tooYoung");
      return;
    }

    // ❌ Grade mismatch with age
    if (
      (grade === "9th" && (age < 13 || age > 16)) ||
      (grade === "10th" && (age < 14 || age > 17)) ||
      (grade === "11th" && (age < 15 || age > 18)) ||
      (grade === "12th" && (age < 16 || age > 19))
    ) {
      setError("That doesn’t look right. Please double-check your birthday and grade.");
      return;
    }

    // ❌ College or Other
    if (grade === "College" || grade === "Other") {
      setBlocked("college");
      return;
    }

    // ❌ 7th or 8th grade (but age ≥13)
    if (grade === "7th" || grade === "8th") {
      setBlocked("middleschool");
      return;
    }

    // ✅ Normal high school path
    router.push("/onboarding/school");
  };

  // 🚫 Blocked States
  if (blocked === "tooYoung") {
    return (
      <OnboardingLayout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-4">
          <h1 className={`${bebas.className} text-white text-4xl`}>You’re Too Young to Join</h1>
          <p className="text-white/80 text-base">
            We can only support athletes 13+ at this time. Keep playing hard — we’ll be here when you’re ready.
          </p>
        </div>
      </OnboardingLayout>
    );
  }

  if (blocked === "college") {
    return (
      <OnboardingLayout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-4">
          <h1 className={`${bebas.className} text-white text-4xl`}>
            Right now we only support high school athletes.
          </h1>
          <p className="text-white/80 text-base">
            We’ll notify you when college athletes can join.
          </p>
          <button
            onClick={() => router.push("/waitlist")}
            className="mt-6 w-full py-4 rounded-xl font-bold text-lg shadow-lg
                       bg-gradient-to-r from-[#006DFF] to-[#6C63FF] text-white"
          >
            Join Waitlist →
          </button>
        </div>
      </OnboardingLayout>
    );
  }

  if (blocked === "middleschool") {
    return (
      <OnboardingLayout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-4">
          <h1 className={`${bebas.className} text-white text-4xl`}>High School Only (for now)</h1>
          <p className="text-white/80 text-base">
            We’re currently built for high school athletes. Stay tuned — middle school support is coming.
          </p>
          <button
            onClick={() => router.push("/waitlist")}
            className="mt-6 w-full py-4 rounded-xl font-bold text-lg shadow-lg
                       bg-gradient-to-r from-[#006DFF] to-[#6C63FF] text-white"
          >
            Join Waitlist →
          </button>
        </div>
      </OnboardingLayout>
    );
  }

  // ✅ Normal Page
  return (
    <OnboardingLayout>
      <div className="flex flex-col min-h-screen px-6 py-6">
        {/* Progress Tracker */}
        <div className="flex justify-center pt-6 pb-2">
          <OnboardingProgress currentStep={3} totalSteps={6} />
        </div>

        {/* Headline + Subheadline */}
        <div className="mb-6">
          <h1 className={`${bebas.className} text-white text-5xl drop-shadow-lg`}>
            When’s Your Birthday?
          </h1>
          <p className={`${inter.className} text-white/80 text-base mt-2`}>
            We use this to confirm you’re in high school and eligible for NIL.
          </p>
          <p className="text-xs text-white/60 mt-1">
            We only use your birthday and grade to confirm eligibility. This info is never shown publicly.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Segmented DOB */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Date of Birth</label>
            <div className="flex space-x-2">
              <input
                ref={monthRef}
                type="tel"
                maxLength={2}
                placeholder="MM"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value.replace(/\D/g, ""));
                  if (e.target.value.length === 2) dayRef.current?.focus();
                }}
                className="w-16 px-3 py-3 rounded-xl text-center
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white font-bold placeholder-gray-500
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
              <input
                ref={dayRef}
                type="tel"
                maxLength={2}
                placeholder="DD"
                value={day}
                onChange={(e) => {
                  setDay(e.target.value.replace(/\D/g, ""));
                  if (e.target.value.length === 2) yearRef.current?.focus();
                }}
                className="w-16 px-3 py-3 rounded-xl text-center
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white font-bold placeholder-gray-500
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
              <input
                ref={yearRef}
                type="tel"
                maxLength={4}
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value.replace(/\D/g, ""))}
                className="w-24 px-3 py-3 rounded-xl text-center
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-white font-bold placeholder-gray-500
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Grade */}
          <div className="relative">
            <label className="block text-white/80 text-sm mb-1">Grade in School</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
                         bg-white/10 backdrop-blur-md border border-white/20
                         text-white font-bold pr-10
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-500
                         appearance-none"
            >
              <option value="">Select your grade</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="College">College</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-4 h-4 text-white/70"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Inline Error */}
          {error && <p className="text-sm text-red-400">{error}</p>}
        </div>

        {/* CTA */}
        <div className="mt-6 mb-6">
          <button
            disabled={!month || !day || !year || !grade}
            onClick={handleNext}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition
              ${
                month && day && year && grade
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
