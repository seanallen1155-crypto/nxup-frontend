"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useOnboardingStore } from "@/store/onboardingStore";

const SCHOOL_YEAR_START = { month: 8, day: 1 };
const GRADE_MIN = 6;
const GRADE_MAX = 12;

export default function BirthdayStep({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { dob, grade, setDob, setGrade } = useOnboardingStore();

  const [month, setMonth] = useState(dob?.month || "");
  const [day, setDay] = useState(dob?.day || "");
  const [year, setYear] = useState(dob?.year || "");
  const [error, setError] = useState("");

  const monthRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  // Determine upcoming year
  const today = new Date();
  const cutoff = new Date(
    today.getFullYear(),
    SCHOOL_YEAR_START.month - 1,
    SCHOOL_YEAR_START.day
  );
  const upcomingYear = today < cutoff ? today.getFullYear() : today.getFullYear() + 1;

  const classOf =
    grade !== null && grade >= GRADE_MIN && grade <= GRADE_MAX
      ? upcomingYear + (12 - grade)
      : null;

  const isValidDate = (m: string, d: string, y: string) => {
    if (!m || !d || !y) return false;
    const mm = parseInt(m, 10);
    const dd = parseInt(d, 10);
    const yyyy = parseInt(y, 10);
    if (yyyy < 1900 || yyyy > 2100) return false;
    const date = new Date(yyyy, mm - 1, dd);
    return (
      date.getMonth() + 1 === mm &&
      date.getDate() === dd &&
      date.getFullYear() === yyyy
    );
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!grade) {
      setError("Select your upcoming grade.");
      return;
    }
    if ((month || day || year) && !isValidDate(month, day, year)) {
      setError("Please enter a real date (MM DD YYYY).");
      return;
    }
    setDob({ month, day, year });
    onNext();
  }

  const handleAutoAdvance = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void,
    nextRef?: React.RefObject<HTMLInputElement>,
    maxLength?: number
  ) => {
    let val = e.target.value.replace(/\D/g, "");
    if (maxLength && val.length > maxLength) val = val.slice(0, maxLength);
    setter(val);
    if (maxLength && val.length === maxLength && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    prevRef?: React.RefObject<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      (e.currentTarget as HTMLInputElement).selectionStart === 0
    ) {
      prevRef?.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* DOB */}
      <div>
        <label className="text-xs text-white/70 mb-2 block">Date of Birth</label>
        <div className="flex space-x-2">
          <input
            ref={monthRef}
            aria-label="Month"
            type="text"
            inputMode="numeric"
            placeholder="MM"
            value={month}
            onChange={(e) => handleAutoAdvance(e, setMonth, dayRef, 2)}
            onBlur={() => month.length === 1 && setMonth("0" + month)}
            onKeyDown={(e) => handleBackspace(e)}
            className="w-14 h-12 text-center rounded-xl bg-white/10 border border-white/20 text-white font-bold"
          />
          <input
            ref={dayRef}
            aria-label="Day"
            type="text"
            inputMode="numeric"
            placeholder="DD"
            value={day}
            onChange={(e) => handleAutoAdvance(e, setDay, yearRef, 2)}
            onBlur={() => day.length === 1 && setDay("0" + day)}
            onKeyDown={(e) => handleBackspace(e, monthRef)}
            className="w-14 h-12 text-center rounded-xl bg-white/10 border border-white/20 text-white font-bold"
          />
          <input
            ref={yearRef}
            aria-label="Year"
            type="text"
            inputMode="numeric"
            placeholder="YYYY"
            value={year}
            onChange={(e) => handleAutoAdvance(e, setYear, undefined, 4)}
            onKeyDown={(e) => handleBackspace(e, dayRef)}
            className="w-20 h-12 text-center rounded-xl bg-white/10 border border-white/20 text-white font-bold"
          />
        </div>
      </div>

      {/* Grade */}
      <div>
        <label className="text-xs text-white/70 mb-2 block">
          Grade for the upcoming school year
        </label>
        <div role="radiogroup" className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {Array.from({ length: GRADE_MAX - GRADE_MIN + 1 }, (_, i) => GRADE_MIN + i).map(
            (g) => {
              const labels: Record<number, string> = {
                9: "Fr",
                10: "So",
                11: "Jr",
                12: "Sr",
              };
              return (
                <button
                  key={g}
                  type="button"
                  role="radio"
                  aria-checked={grade === g}
                  onClick={() => setGrade(g)}
                  className={`px-4 py-2 rounded-xl border text-white font-medium transition ${
                    grade === g
                      ? "bg-gradient-to-r from-[#006DFF] to-[#C6FF45] border-white/30"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }`}
                >
                  {labels[g] || g}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="text-red-400 text-sm"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="flex justify-between space-x-2">
        <Button type="button" onClick={onBack} className="flex-1 bg-gray-700">
          Back
        </Button>
        <Button type="submit" disabled={!grade} className="flex-1">
          Continue
        </Button>
      </div>
    </form>
  );
}
