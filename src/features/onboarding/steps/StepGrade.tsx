"use client";

import { useState } from "react";
import { PrimaryCTAButton } from "@ui/actions/PrimaryCTAButton";

const grades = ["6th", "7th", "8th", "9th", "10th", "11th", "12th", "College"];

interface StepGradeProps {
  onNext: () => void;
}

export function StepGrade({ onNext }: StepGradeProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* Headline */}
      <h2 className="font-inter font-semibold text-white text-2xl mt-2 text-center">
        What grade are you in right now? 📚
      </h2>

      {/* Helper text */}
      <p className="mt-2 text-md font-medium text-gray-300 text-center max-w-md">
        Pick your grade (or the one you’re starting) and you’re on your way to building your NIL brand.
      </p>

      {/* Options */}
      <div className="mt-8 grid grid-cols-4 gap-4 w-full max-w-md">
        {grades.map((g) => (
          <button
            key={g}
            onClick={() => setSelected(g)}
            className={`h-16 flex items-center justify-center rounded-md text-sm transition
              ${
                selected === g
                  ? "border border-green-500 bg-green-100 text-green-800 font-extrabold"
                  : "bg-gray-800 text-white font-extrabold border border-gray-600 hover:border-green-400"
              }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Continue */}
      <div className="mt-10">
        <PrimaryCTAButton disabled={!selected} onClick={onNext}>
          Continue
        </PrimaryCTAButton>
      </div>
    </div>
  );
}
