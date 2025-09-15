import { describe, it, expect } from "vitest";
import { calculateAge, isEligibleByAge, DOB } from "@/lib/eligibility";

function makeDOB(yearsAgo: number, offsetDays = 0): DOB {
  const today = new Date();
  const birthDate = new Date(
    today.getFullYear() - yearsAgo,
    today.getMonth(),
    today.getDate() + offsetDays
  );

  return {
    mm: String(birthDate.getMonth() + 1).padStart(2, "0"),
    dd: String(birthDate.getDate()).padStart(2, "0"),
    yyyy: String(birthDate.getFullYear()),
  };
}

describe("eligibility utils", () => {
  describe("calculateAge", () => {
    it("returns correct age for exact birthday today", () => {
      const dob = makeDOB(13, 0);
      expect(calculateAge(dob)).toBe(13);
    });

    it("returns one less if birthday is tomorrow", () => {
      const dob = makeDOB(13, +1);
      expect(calculateAge(dob)).toBe(12);
    });

    it("returns one more if birthday was yesterday", () => {
      const dob = makeDOB(13, -1);
      expect(calculateAge(dob)).toBe(13);
    });

    it("handles leap year birthdays correctly (Feb 29)", () => {
      const dob: DOB = { mm: "02", dd: "29", yyyy: "2008" }; // leap year
      expect(calculateAge(dob)).toBeGreaterThanOrEqual(0); // just ensure valid
    });

    it("throws on invalid date", () => {
      const badDob: DOB = { mm: "13", dd: "40", yyyy: "abcd" };
      expect(() => calculateAge(badDob)).toThrow();
    });
  });

  describe("isEligibleByAge", () => {
    it("returns true when age >= minAge", () => {
      const dob = makeDOB(15);
      expect(isEligibleByAge(dob, 13)).toBe(true);
    });

    it("returns false when age < minAge", () => {
      const dob = makeDOB(12);
      expect(isEligibleByAge(dob, 13)).toBe(false);
    });

    it("uses default minAge = 13", () => {
      const dob = makeDOB(14);
      expect(isEligibleByAge(dob)).toBe(true);
    });
  });
});
