"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BirthdayStep({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const { grade, setGrade, dob, setDob, setFlags } = useOnboardingStore();

  const [dobValue, setDobValue] = useState(
    dob?.month && dob?.day && dob?.year ? `${dob.month}${dob.day}${dob.year}` : ""
  );
  const [error, setError] = useState("");

  const formatDob = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 8);
    const parts: string[] = [];
    if (digits.length >= 2) {
      parts.push(digits.slice(0, 2));
      if (digits.length >= 4) {
        parts.push(digits.slice(2, 4));
        if (digits.length > 4) {
          parts.push(digits.slice(4));
        }
      } else {
        parts.push(digits.slice(2));
      }
    } else {
      parts.push(digits);
    }
    return parts.filter(Boolean).join("/");
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatDob(raw);
    setDobValue(formatted);
  };

  function calculateAge(mm: string, dd: string, yyyy: string) {
    const birthDate = new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
    const today = new Date();
    let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    const m = today.getUTCMonth() - birthDate.getUTCMonth();
    if (m < 0 || (m === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
      age--;
    }
    return age;
  }

  function expectedGradeAgeRange(g: number) {
    switch (g) {
      case 9: return [13, 15];
      case 10: return [14, 16];
      case 11: return [15, 17];
      case 12: return [16, 18];
      default: return [0, 0];
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!grade || grade < 9 || grade > 12) {
      setError("Right now this app is only for high school athletes (grades 9–12).");
      return;
    }

    const digits = dobValue.replace(/\D/g, "");
    if (digits.length !== 8) {
      setError("Please complete your birthday.");
      return;
    }

    const mm = digits.slice(0, 2);
    const dd = digits.slice(2, 4);
    const yyyy = digits.slice(4);

    const date = new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
    if (
      date.getMonth() + 1 !== parseInt(mm) ||
      date.getDate() !== parseInt(dd) ||
      date.getFullYear() !== parseInt(yyyy)
    ) {
      setError("That date doesn’t look right. Try again.");
      return;
    }

    if (date > new Date()) {
      setError("That’s in the future. Enter your real birthday.");
      return;
    }

    const age = calculateAge(mm, dd, yyyy);
    if (age < 13) {
      setError(
        "Thanks for your interest! This app is only for athletes 13 and older. We’ll let you know when it’s your time to shine."
      );
      return;
    }

    const [minAge, maxAge] = expectedGradeAgeRange(grade);
    if (age < minAge - 1 || age > maxAge + 1) {
      setError(
        "Hmm, that doesn’t look right. Your grade doesn’t match your birthday. Double-check and try again."
      );
      return;
    }

    // Save DOB + flags
    setDob({ month: mm, day: dd, year: yyyy });
    setFlags({
      age_at_signup: age,
      is_minor: age < 18,
      grade_validated: true,
      parent_approval_status: age < 18 ? "Pending" : "Approved",
    });

    console.log("✅ Birthday step complete", {
      dob: { month: mm, day: dd, year: yyyy },
      grade,
      flags: {
        age_at_signup: age,
        is_minor: age < 18,
        grade_validated: true,
        parent_approval_status: age < 18 ? "Pending" : "Approved",
      },
    });

    onNext(); // advance to Location step
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col min-h-[70vh]">
      {/* Top Nav Back Button */}
      <div className="flex items-center mb-6 -ml-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" strokeWidth={2} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* DOB */}
      <div className="mb-5">
        <label className="text-base text-white mb-2 block font-semibold">
          When’s your birthday?
        </label>
        <input
          aria-label="Birthday"
          type="text"
          inputMode="numeric"
          placeholder="MM/DD/YYYY"
          value={dobValue}
          onChange={handleDobChange}
          className="w-full h-12 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-center placeholder-gray-400 placeholder:italic focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grade */}
      <div className="mb-6">
        <label className="text-base text-white mb-2 block font-semibold">
          What grade are you in?
        </label>
        <div className="flex justify-between gap-3">
          {[9, 10, 11, 12].map((g) => {
            const labels: Record<number, string> = {
              9: "Fr",
              10: "So",
              11: "Jr",
              12: "Sr",
            };
            const isSelected = grade === g;
            return (
              <motion.button
                key={g}
                type="button"
                whileTap={{ scale: 0.95 }}
                animate={isSelected ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => setGrade(g)}
                className={`flex-1 h-12 rounded-xl font-semibold transition-all duration-200 
                  ${
                    isSelected
                      ? "bg-[#006DFF] text-white shadow-lg shadow-blue-500/40"
                      : "border border-white/30 text-white/80 bg-transparent hover:bg-white/10"
                  }`}
              >
                {labels[g]}
              </motion.button>
            );
          })}
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* Continue CTA pinned bottom */}
      <div className="mt-auto pt-6">
        <Button type="submit" disabled={!grade} className="w-full">
          Continue
        </Button>
      </div>
    </form>
  );
}
