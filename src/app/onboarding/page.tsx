"use client";

import OnboardingLayout from "@/components/ui/OnboardingLayout";
import BrandCard from "@/components/ui/BrandCard";
import { useOnboardingStore } from "@/store/onboardingStore";
import { AnimatedFirst, AnimatedLast } from "@/components/ui/AnimatedName";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

export default function OnboardingPage() {
  const {
    firstName,
    lastName,
    nickname,
    setFirstName,
    setLastName,
    setNickname,
  } = useOnboardingStore();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const lastNameRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const isValidName = (val: string) =>
    /^[A-Za-zÀ-ÖØ-öø-ÿ .'\-]{2,}$/.test(val.trim());

  const formValid = isValidName(firstName) && isValidName(lastName);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formValid) return;

    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Name step complete ✅", {
        firstName,
        lastName,
        nickname,
      });
      // For now, stop here (no birthday/location yet)
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <OnboardingLayout>
      <div className="-mx-6">
        <div className="flex flex-col min-h-[100svh] pt-[env(safe-area-inset-top,44px)] pb-[env(safe-area-inset-bottom,24px)]">
          {/* Card */}
          <div className="flex justify-center">
            <BrandCard
              firstName={<AnimatedFirst firstName={firstName} nickname={nickname} />}
              lastName={<AnimatedLast lastName={lastName} />}
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col px-4 space-y-3"
          >
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-xs text-white/70 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Jordan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    lastNameRef.current?.focus();
                  }
                }}
                className="h-12 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold placeholder-gray-400 placeholder:italic focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-xs text-white/70 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Washington"
                ref={lastNameRef}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    nicknameRef.current?.focus();
                  }
                }}
                className="h-12 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold placeholder-gray-400 placeholder:italic focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Nickname */}
            <div className="flex flex-col">
              <label htmlFor="nickname" className="text-xs text-white/70 mb-1">
                Nickname (optional)
              </label>
              <input
                id="nickname"
                type="text"
                placeholder="J-Wash"
                ref={nicknameRef}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (formValid) handleSubmit(e);
                  }
                }}
                className="h-12 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold placeholder-gray-400 placeholder:italic focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* CTA */}
            <Button
              type="submit"
              disabled={!formValid || loading}
              className="mt-4 h-12 rounded-xl font-semibold disabled:opacity-40"
            >
              {loading ? "Saving..." : "Continue"}
            </Button>

            {error && (
              <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
            )}
          </form>

          <div className="mt-auto h-[env(safe-area-inset-bottom,24px)]" />
        </div>
      </div>
    </OnboardingLayout>
  );
}
