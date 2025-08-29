"use client";

import { useState } from "react";
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import BrandCard from "@/components/ui/BrandCard";
import { useOnboardingStore } from "@/store/onboardingStore";
import { AnimatedFirst, AnimatedLast } from "@/components/ui/AnimatedName";
import NameStep from "@/components/onboarding/NameStep";
import BirthdayStep from "@/components/onboarding/BirthdayStep";
import LocationStep from "@/components/onboarding/LocationStep";

export default function OnboardingPage() {
  const { firstName, lastName, nickname, grade } = useOnboardingStore();

  const [currentStep, setCurrentStep] = useState<"name" | "birthday" | "location">("name");

  return (
    <OnboardingLayout>
      <div className="-mx-6">
        <div className="flex flex-col min-h-[100svh] pt-[env(safe-area-inset-top,44px)] pb-[env(safe-area-inset-bottom,24px)]">
          
          {/* Card always pinned */}
          <div className="flex justify-center">
            <BrandCard
              firstName={<AnimatedFirst firstName={firstName} nickname={nickname} />}
              lastName={<AnimatedLast lastName={lastName} />}
              classYear={
                grade ? (
                  <span className="text-[#C6FF45] font-light text-[clamp(18px,4vw,24px)]">
                    Class of {/* live computed in BirthdayStep */}
                  </span>
                ) : (
                  <span className="text-white italic font-light text-[clamp(18px,4vw,24px)]">
                    Your Class Year
                  </span>
                )
              }
            />
          </div>

          {/* Step manager */}
          <div className="mt-4 flex flex-col px-4 space-y-4">
            {currentStep === "name" && <NameStep onNext={() => setCurrentStep("birthday")} />}
            {currentStep === "birthday" && (
              <BirthdayStep onNext={() => setCurrentStep("location")} onBack={() => setCurrentStep("name")} />
            )}
            {currentStep === "location" && <LocationStep onBack={() => setCurrentStep("birthday")} />}
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
}
