"use client";

import { create } from "zustand";

type Dob = {
  month: string;
  day: string;
  year: string;
};

type Flags = {
  age_at_signup: number | null;
  is_minor: boolean | null;
  grade_validated: boolean;
  parent_approval_status: "Pending" | "Approved" | "Rejected" | null;
};

type OnboardingState = {
  firstName: string;
  lastName: string;
  nickname: string;
  grade: number | null;
  dob: Dob | null;
  flags: Flags;

  // setters
  setFirstName: (val: string) => void;
  setLastName: (val: string) => void;
  setNickname: (val: string) => void;
  setGrade: (val: number) => void;
  setDob: (dob: Dob) => void;
  setFlags: (flags: Partial<Flags>) => void;

  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  firstName: "",
  lastName: "",
  nickname: "",
  grade: null,
  dob: null,
  flags: {
    age_at_signup: null,
    is_minor: null,
    grade_validated: false,
    parent_approval_status: null,
  },

  setFirstName: (val) => set({ firstName: val }),
  setLastName: (val) => set({ lastName: val }),
  setNickname: (val) => set({ nickname: val }),
  setGrade: (val) => set({ grade: val }),
  setDob: (dob) => set({ dob }),

  setFlags: (flags) =>
    set((state) => ({
      flags: { ...state.flags, ...flags },
    })),

  reset: () =>
    set({
      firstName: "",
      lastName: "",
      nickname: "",
      grade: null,
      dob: null,
      flags: {
        age_at_signup: null,
        is_minor: null,
        grade_validated: false,
        parent_approval_status: null,
      },
    }),
}));
