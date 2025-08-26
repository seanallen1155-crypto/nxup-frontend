// src/context/OnboardingContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OnboardingContextProps {
  score: number;
  bannerText: string;
  firstName: string;
  lastName: string;
  nickname: string;
  setFirstName: (v: string) => void;
  setLastName: (v: string) => void;
  setNickname: (v: string) => void;
  setBannerText: (v: string) => void;
  incrementScore: () => void;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [bannerText, setBannerText] = useState("YOUR BRAND");

  const incrementScore = () => setScore((s) => s + 1);

  return (
    <OnboardingContext.Provider
      value={{
        score,
        bannerText,
        firstName,
        lastName,
        nickname,
        setFirstName,
        setLastName,
        setNickname,
        setBannerText,
        incrementScore,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used inside OnboardingProvider");
  return ctx;
}
