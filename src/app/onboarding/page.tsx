"use client";

import { useState, useMemo } from "react";
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import BrandCard from "@/components/ui/BrandCard";
import { useOnboardingStore } from "@/store/onboardingStore";
import { AnimatedFirst, AnimatedLast } from "@/components/ui/AnimatedName";

import NameStep from "@/components/onboarding/NameStep";
import BirthdayStep from "@/components/onboarding/BirthdayStep";
import LocationStep from "@/components/onboarding/LocationStep";

const SCHOOL_YEAR_START = { month: 8, day: 1 }; // Aug 1
const GRADE_MIN = 9;
const GRADE_MAX = 12;

export default function OnboardingPage() {
  const { firstName, lastName, nickname, grade } = useOnboardingStore();
  const [currentStep, setCurrentStep] = useState<"name" | "birthday" | "location">("name");

  // Compute "Class of" year from grade
  const classOf = useMemo(() => {
    if (typeof grade !== "number" || grade < GRADE_MIN || grade > GRADE_MAX) return null;

    const today = new Date();
    const cutoff = new Date(today.getFullYear(), SCHOOL_YEAR_START.month - 1, SCHOOL_YEAR_START.day);
    const upcomingYear = today < cutoff ? today.getFullYear() : today.getFullYear() + 1;

    return upcomingYear + (12 - grade);
  }, [grade]);

  return (
    <OnboardingLayout>
      <div className="-mx-6">
        <div className="flex flex-col min-h-[100svh] pt-[env(safe-area-inset-top,44px)] pb-[env(safe-area-inset-bottom,24px)]">
          
          {/* Card */}
          <div className="flex justify-center">
            <BrandCard
              firstName={<AnimatedFirst firstName={firstName} nickname={nickname} />}
              lastName={<AnimatedLast lastName={lastName} />}
              classYear={
                classOf ? (
                  <span className="inline-block leading-tight text-white font-light text-[clamp(18px,4vw,24px)]">
                    Class of{" "}
                    <span className="font-light">20</span>
                    <span className="font-extrabold">{String(classOf).slice(-2)}</span>
                  </span>
                ) : (
                  <span className="inline-block leading-tight text-white italic font-light text-[clamp(18px,4vw,24px)]">
                    Your Class Year
                  </span>
                )
              }
            />
          </div>

          {/* Step Manager */}
          <div className="mt-4 flex flex-col px-4 space-y-4">
            {currentStep === "name" && (
              <NameStep onNext={() => setCurrentStep("birthday")} />
            )}
            {currentStep === "birthday" && (
              <BirthdayStep
                onBack={() => setCurrentStep("name")}
                onNext={() => setCurrentStep("location")}
              />
            )}
            {currentStep === "location" && (
              <LocationStep onBack={() => setCurrentStep("birthday")} />
            )}
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
}
