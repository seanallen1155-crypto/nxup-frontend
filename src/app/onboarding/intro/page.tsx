// src/app/onboarding/intro/page.tsx
import OnboardingLayout from "@/components/ui/OnboardingLayout";
import { BrandCardBase } from "@/components/ui/BrandCard";
import { Button } from "@/components/ui/button";

export default function OnboardingIntroPage() {
  return (
    <OnboardingLayout>
      {/* Cancel OnboardingLayout's px-6 so we can achieve exact 16px side margins */}
      <div className="-mx-6">
        <div className="flex flex-col min-h-[100svh] pt-[env(safe-area-inset-top,44px)] pb-[env(safe-area-inset-bottom,24px)]">
          {/* Card (centered, honors 16px margins via its own max-w calc) */}
          <div className="flex justify-center">
            <BrandCardBase />
          </div>

          {/* CTA Block (24px gap below card) */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <form
              action="/onboarding/first-play"
              className="w-full flex justify-center"
            >
              <Button className="h-[56px] w-[80%] rounded-xl font-semibold">
                See Your First Play →
              </Button>
            </form>
            <p className="text-sm text-white/85 text-center">
              Parents approve before going live.
            </p>
          </div>

          {/* Spacer to respect bottom safe area on tall devices */}
          <div className="mt-auto" />
        </div>
      </div>
    </OnboardingLayout>
  );
}
