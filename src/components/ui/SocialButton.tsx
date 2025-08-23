// src/components/ui/SocialButton.tsx
import clsx from "clsx";

type SocialProvider = "google" | "apple";

type SocialButtonProps = {
  provider: SocialProvider;
  onClick?: () => void;
  className?: string;
};

const providerConfig: Record<SocialProvider, { label: string; icon: string }> = {
  google: {
    label: "Continue with Google",
    icon: "/icons/google.svg", // in /public/icons/google.svg
  },
  apple: {
    label: "Continue with Apple",
    icon: "/icons/apple.svg", // in /public/icons/apple.svg
  },
};

export function SocialButton({ provider, onClick, className }: SocialButtonProps) {
  const { label, icon } = providerConfig[provider];

  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full h-12 rounded-xl bg-white text-ink hover:shadow-lg flex items-center justify-center gap-2 transition-shadow",
        className
      )}
    >
      <img src={icon} alt={provider} className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </button>
  );
}
