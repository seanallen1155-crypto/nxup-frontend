"use client";

import { useState } from "react";
import { Input } from "@ui/forms/Input";
import { PrimaryCTAButton } from "@ui/actions/PrimaryCTAButton";

interface StepDOBProps {
  onNext: () => void;
}

export function StepDOB({ onNext }: StepDOBProps) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const isComplete = month.length === 2 && day.length === 2 && year.length === 4;

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      {/* Headline */}
      <h2 className="font-inter font-semibold text-white text-2xl mt-2 text-center">
        When’s your birthday?
      </h2>

      {/* Subline */}
      <p className="mt-2 text-md font-semibold text-gray-300 text-center max-w-md">
        This one’s easy. If you’re 13 or older, you’re good to go. It’s just to
        keep things safe for you.
      </p>

      {/* Segmented DOB inputs */}
      <div className="mt-8 flex space-x-4 w-full max-w-sm">
        {/* Month */}
        <Input
          type="text"
          name="dob-month"
          id="dob-month"
          placeholder="MM"
          aria-label="Month"
          className="w-1/4 text-center"
          maxLength={2}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        {/* Day */}
        <Input
          type="text"
          name="dob-day"
          id="dob-day"
          placeholder="DD"
          aria-label="Day"
          className="w-1/4 text-center"
          maxLength={2}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        {/* Year */}
        <Input
          type="text"
          name="dob-year"
          id="dob-year"
          placeholder="YYYY"
          aria-label="Year"
          className="flex-1 text-center"
          maxLength={4}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      {/* Continue Button */}
      <div className="mt-10">
        <PrimaryCTAButton disabled={!isComplete} onClick={onNext}>
          Continue
        </PrimaryCTAButton>
      </div>
    </div>
  );
}
