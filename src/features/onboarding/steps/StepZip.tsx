"use client";

import { useState } from "react";
import { Input } from "@ui/forms/Input";
import { PrimaryCTAButton } from "@ui/actions/PrimaryCTAButton";

// Mock zip → state map (extend as needed for testing)
const mockZipMap: Record<string, string> = {
  "07648": "New Jersey",
  "10001": "New York",
  "30301": "Georgia",
  "33131": "Florida",
  "60601": "Illinois",
  "94105": "California",
};

interface StepZipProps {
  onNext: () => void;
}

export function StepZip({ onNext }: StepZipProps) {
  const [zip, setZip] = useState("");
  const [state, setState] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValidZip = /^\d{5}$/.test(zip);

  const handleZipChange = (value: string) => {
    setZip(value);

    if (/^\d{5}$/.test(value)) {
      const matchedState = mockZipMap[value];
      if (matchedState) {
        setState(matchedState);
        setError(null);
      } else {
        setState(null);
        setError("Hmm, we couldn’t match that zip. Double-check and try again.");
      }
    } else {
      setState(null);
      setError(null); // Clear error if not complete
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* Motivational Nudge */}
      <p className="text-sm text-white font-bold mb-2">
        Last step. You’re almost there.
      </p>

      {/* Headline */}
      <h2 className="font-inter font-semibold text-white text-2xl mt-1 text-center">
        What’s your home zip code? 🧭
      </h2>

      {/* Helper text */}
      <p className="mt-2 text-md font-medium text-gray-300 text-center max-w-md">
        This just tells us your state so we can confirm NIL is allowed for you.
      </p>

      {/* Zip input */}
        <div className="mt-8 w-24 mx-auto">
        <Input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            name="zip"
            id="zip"
            placeholder="ZIP"
            aria-label="Zip Code"
            maxLength={5}
            value={zip}
            onChange={(e) => handleZipChange(e.target.value)}
            className="text-center tracking-widest"
        />
        </div>

      {/* Inline confirmation */}
      {state && (
        <p className="mt-3 text-green-400 font-semibold">
          Got it. Looks like you play in {state}.
        </p>
      )}
      {error && (
        <p className="mt-3 text-red-400 font-semibold">{error}</p>
      )}

      {/* Continue */}
      <div className="mt-10">
        <PrimaryCTAButton disabled={!isValidZip || !!error} onClick={onNext}>
          Continue
        </PrimaryCTAButton>
      </div>
    </div>
  );
}
