import { create } from "zustand";
import { persist } from "zustand/middleware";

type Dob = {
  month: string;
  day: string;
  year: string;
};

type OnboardingState = {
  firstName: string;
  lastName: string;
  nickname: string;
  dob: Dob | null;
  grade: number | null;
  setFirstName: (val: string) => void;
  setLastName: (val: string) => void;
  setNickname: (val: string) => void;
  setDob: (dob: Dob | null) => void;
  setGrade: (grade: number | null) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      nickname: "",
      dob: null,
      grade: null,
      setFirstName: (val) => set({ firstName: val }),
      setLastName: (val) => set({ lastName: val }),
      setNickname: (val) => set({ nickname: val }),
      setDob: (dob) => set({ dob }),
      setGrade: (grade) => set({ grade }),
    }),
    {
      name: "onboarding-storage", // localStorage key
      getStorage: () => localStorage,
    }
  )
);
