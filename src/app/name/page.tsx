"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { H1, Body } from "@/components/ui/typography";

export default function NamePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // debounce typing state
  useEffect(() => {
    if (!isTyping) return;
    const timer = setTimeout(() => setIsTyping(false), 1000);
    return () => clearTimeout(timer);
  }, [isTyping, name]);

  const handleNext = () => {
    if (!name.trim()) return;
    localStorage.setItem("onboarding_name", name.trim());
    router.push("/birthday");
  };

  return (
    <OnboardingLayout>
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-sm mx-auto">
        <H1 className="text-4xl font-extrabold text-white">
          WHAT’S YOUR NAME?
        </H1>
        <Body className="text-gray-300">
          This will be your name on merch and leaderboards.
        </Body>

        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setIsTyping(false);
          }}
          onChange={(e) => {
            setName(e.target.value);
            setIsTyping(true);
          }}
          className={`
            w-full 
            bg-transparent border border-gray-600 
            text-white placeholder-gray-400 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${isTyping 
              ? "input-pulse" 
              : isFocused 
                ? "shadow-[0_0_20px_rgba(0,109,255,0.7)]" 
                : ""}
            font-bold text-lg tracking-wide  
            transition-all duration-300
          `}
        />

        <Button
          onClick={handleNext}
          disabled={!name.trim()}
          className="w-full py-4 text-lg font-bold rounded-xl
                     bg-gradient-to-r from-blue-500 to-blue-600
                     hover:from-blue-600 hover:to-blue-700
                     disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-[0_0_20px_rgba(0,109,255,0.6)]"
        >
          NEXT
        </Button>
      </div>
    </OnboardingLayout>
  );
}
