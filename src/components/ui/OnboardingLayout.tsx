// src/components/ui/OnboardingLayout.tsx
export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-col items-center justify-start min-h-screen 
                 bg-gradient-to-b from-[#006DFF] to-[#0E0E0E] overflow-hidden"
    >
      {/* Subtle vignette / radial stadium light */}
      <div
        className="absolute inset-0 pointer-events-none 
                   bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"
      />
      <main className="relative z-10 px-6 w-full pt-12">{children}</main>
    </div>
  );
}
