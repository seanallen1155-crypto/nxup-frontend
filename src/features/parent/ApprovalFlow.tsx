"use client";

import { useState } from "react";
import { BrowserLogo } from "@ui/logo/BrowserLogo";
import { BrowserFooter } from "@ui/footer/BrowserFooter";
import { SolidCard } from "@ui/cards/SolidCard";
import { StepVerifyPhone } from "./steps/StepVerifyPhone";

export function ApprovalFlow() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepVerifyPhone onNext={() => setCurrentStep(2)} />;
      default:
        return <p className="text-gray-700">Unknown step</p>;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white">
      {/* Banner/Header */}
        <div
        className="w-full h-[160px] relative"
        style={{ backgroundColor: "#008080" }} // TODO: promote to tokens
        >
        <div className="absolute top-8 left-6 z-10">
            <BrowserLogo theme="dark" variant="wide" />
        </div>
        </div>
      {/* Persistent Card anchored to banner */}
      <div className="relative z-10 flex flex-1 items-start justify-center -mt-[80px]">
        <SolidCard
          className="w-[90vw] max-w-[600px] min-h-[400px] rounded-2xl shadow-lg"
          style={{
            background: "linear-gradient(to right, #e0f2f2 0%, #ffffff 10%, #ffffff 100%)",
            // TODO: promote gradient to tokens
          }}
        >
          {renderStep()}
        </SolidCard>
      </div>

      {/* Footer (on white background → light theme) */}
      <div className="relative z-10 mt-8">
        <BrowserFooter theme="light" />
      </div>
    </div>
  );
}
