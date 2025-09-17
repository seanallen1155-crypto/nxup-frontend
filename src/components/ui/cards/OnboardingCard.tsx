"use client";

interface OnboardingCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function OnboardingCard({
  children,
  className = "",
  style = {},
}: OnboardingCardProps) {
  return (
    <div
      className={`onboarding-card w-[90%] max-w-[400px] ${className}`}
      style={{
        height: "calc(100vh - 48px)", // ✅ viewport height minus 24px top & bottom safe margins
        background: "rgba(18,18,18,0.8)",
        borderRadius: "16px",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0px 16px 34px rgba(0,0,0,0.7)",
        border: "1px solid rgba(255,255,255,0.035)",
        zIndex: 3,
        padding: "20px 16px", // ✅ 20px top/bottom, 16px sides
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}