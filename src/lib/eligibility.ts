// src/lib/eligibility.ts

export type DOB = {
  mm: string;
  dd: string;
  yyyy: string;
};

/**
 * Calculates age in years from a DOB object { mm, dd, yyyy }.
 * Returns a number >= 0.
 */
export function calculateAge(dob: DOB): number {
  if (!dob.mm || !dob.dd || !dob.yyyy) {
    throw new Error("Invalid DOB: missing fields");
  }

  const birthDate = new Date(
    Number(dob.yyyy),
    Number(dob.mm) - 1,
    Number(dob.dd)
  );

  if (isNaN(birthDate.getTime())) {
    throw new Error("Invalid DOB: could not construct valid date");
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

/**
 * Checks if a given DOB meets the minimum age requirement.
 * Defaults to 13 (common eligibility cutoff).
 */
export function isEligibleByAge(dob: DOB, minAge = 13): boolean {
  return calculateAge(dob) >= minAge;
}
