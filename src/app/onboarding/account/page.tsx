// src/app/onboarding/account/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import zxcvbn from "zxcvbn";
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import OnboardingProgress from "@/components/ui/OnboardingProgress";
import PulseWrapper from "@/components/ui/PulseWrapper";

export default function OnboardingAccountPage() {
  const [mode, setMode] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ input: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Track which input is active
  const [activeInput, setActiveInput] = useState<string | null>(null);

  // Auto-format phone number as (123) 456-7890
  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    let formatted = digits;

    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }

    setPhone(formatted);
  };

  // Validation
  const isValidPhone = phone.replace(/\D/g, "").length === 10;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password validation with zxcvbn
  const passwordCheck = zxcvbn(password || "");
  const passwordScore = passwordCheck.score; // 0–4
  const isValidPassword = passwordScore >= 2; // require "medium" strength

  const isValid =
    mode === "phone"
      ? isValidPhone && isValidPassword
      : isValidEmail && isValidPassword;

  return (
    <OnboardingLayout>
      {/* Progress Tracker */}
      <div className="absolute top-6 left-0 right-0 flex justify-center">
        <OnboardingProgress currentStep={1} totalSteps={6} />
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto w-full space-y-6 pt-[15vh]">
        {/* Tabs */}
        <div className="flex border-b border-white/20">
          <button
            onClick={() => {
              setMode("phone");
              setTouched({ input: false, password: false });
              setActiveInput(null);
            }}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              mode === "phone"
                ? "text-white border-b-2 border-white"
                : "text-white/60"
            }`}
          >
            Phone Number
          </button>
          <button
            onClick={() => {
              setMode("email");
              setTouched({ input: false, password: false });
              setActiveInput(null);
            }}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              mode === "email"
                ? "text-white border-b-2 border-white"
                : "text-white/60"
            }`}
          >
            Email Address
          </button>
        </div>

        {/* Phone or Email Input */}
        <PulseWrapper isActive={activeInput === "contact"}>
          {mode === "phone" ? (
            <input
              id="contact"
              type="tel"
              value={phone}
              onFocus={() => setActiveInput("contact")}
              onBlur={() => {
                setTouched((t) => ({ ...t, input: true }));
                setActiveInput(null);
              }}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-3 rounded-xl font-bold
                         bg-white/10 backdrop-blur-md border 
                         text-white placeholder-gray-500 
                         focus:ring-2 focus:ring-blue-500
                         ${
                           touched.input && !isValidPhone
                             ? "border-red-500 focus:ring-red-500"
                             : "border-white/20 focus:border-blue-400"
                         }`}
            />
          ) : (
            <input
              id="contact"
              type="email"
              value={email}
              onFocus={() => setActiveInput("contact")}
              onBlur={() => {
                setTouched((t) => ({ ...t, input: true }));
                setActiveInput(null);
              }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 rounded-xl font-bold
                         bg-white/10 backdrop-blur-md border 
                         text-white placeholder-gray-500 
                         focus:ring-2 focus:ring-blue-500
                         ${
                           touched.input && !isValidEmail
                             ? "border-red-500 focus:ring-red-500"
                             : "border-white/20 focus:border-blue-400"
                         }`}
            />
          )}
        </PulseWrapper>

        {/* Error message */}
        {touched.input &&
          ((mode === "phone" && !isValidPhone) ||
            (mode === "email" && !isValidEmail)) && (
            <p className="text-sm text-red-400">
              {mode === "phone"
                ? "Please enter a valid 10-digit phone number."
                : "Please enter a valid email address."}
            </p>
          )}

        {/* Password Input + Strength Meter */}
        <PulseWrapper isActive={activeInput === "password"}>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onFocus={() => setActiveInput("password")}
              onBlur={() => {
                setTouched((t) => ({ ...t, password: true }));
                setActiveInput(null);
              }}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password (min 8 characters)"
              className={`w-full px-4 py-3 rounded-xl font-bold
                         bg-white/10 backdrop-blur-md border 
                         text-white placeholder-gray-500 
                         focus:ring-2 pr-12
                         ${
                           touched.password && !isValidPassword
                             ? "border-red-500 focus:ring-red-500"
                             : "border-white/20 focus:border-blue-400"
                         }`}
            />
            {/* Show/Hide toggle */}
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute inset-y-0 right-3 flex items-center text-white/70 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </PulseWrapper>

        {/* Strength meter */}
        {password.length > 0 && (
          <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                passwordScore <= 1
                  ? "bg-red-500 w-1/4"
                  : passwordScore === 2
                  ? "bg-yellow-400 w-2/4"
                  : passwordScore === 3
                  ? "bg-blue-400 w-3/4"
                  : "bg-green-500 w-full"
              }`}
            />
          </div>
        )}

        {touched.password && password.length > 0 && (
          <p
            className={`mt-1 text-sm ${
              passwordScore <= 1
                ? "text-red-400"
                : passwordScore === 2
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {passwordScore <= 1
              ? "Weak password"
              : passwordScore === 2
              ? "Medium password"
              : "Strong password"}
          </p>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-white/60">
          You may receive updates from NXUP and can opt out at any time.
        </p>

        {/* CTA */}
        <button
          disabled={!isValid}
          onClick={() => router.push("/onboarding/name")}
          className={`mt-8 w-full py-4 rounded-xl font-bold text-lg shadow-lg transition
            ${
              isValid
                ? "bg-gradient-to-r from-[#006DFF] to-[#6C63FF] text-white"
                : "bg-gray-700/50 text-white/40 cursor-not-allowed"
            }`}
        >
          Next →
        </button>
      </div>
    </OnboardingLayout>
  );
}
