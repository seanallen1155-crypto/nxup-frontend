// src/features/onboarding/steps/ineligibleContent.ts

export type IneligibleReason = "grade" | "state" | "college";

export const INELIGIBLE_CONTENT: Record<
  IneligibleReason,
  {
    headline: string;
    subtext: string;
    cta: string;
  }
> = {
  grade: {
    headline: "Get on the list.",
    subtext:
      "Built for high school athletes. Enter your number and we'll text you a login link when you hit the 9th grade.",
    cta: "Notify Me",
  },
  state: {
    headline: "We’ll keep you posted.",
    subtext:
      "NIL isn’t open in your state yet. Drop your number and we’ll text you when it is.",
    cta: "Keep Me Posted",
  },
  college: {
    headline: "You’re first in line.",
    subtext:
      "We’re rolling out college support soon. Add your number and you’ll be among the first invited.",
    cta: "Join the Waitlist",
  },
};

// ✅ Universal footer microcopy
export const INELIGIBLE_FOOTER =
  "We’ll text you as soon as you’re eligible. No spam, ever.";
