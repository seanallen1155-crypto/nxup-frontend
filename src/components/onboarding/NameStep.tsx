"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/store/onboardingStore";

export default function NameStep({ onNext }: { onNext: () => void }) {
  const { firstName, lastName, nickname, setFirstName, setLastName, setNickname } =
    useOnboardingStore();

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
      onNext(); // ✅ switch to Birthday step
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      {/* First Name */}
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold placeholder-gray-400 placeholder:italic"
      />
      {/* Last Name */}
      <input
        type="text"
        placeholder="Last name"
        ref={lastNameRef}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold placeholder-gray-400 placeholder:italic"
      />
      {/* Nickname */}
      <input
        type="text"
        placeholder="What do your friends call you (optional)"
        ref={nicknameRef}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold placeholder-gray-400 placeholder:italic"
      />

      <Button type="submit" disabled={!formValid || loading}>
        {loading ? "Saving..." : "Continue"}
      </Button>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  );
}
