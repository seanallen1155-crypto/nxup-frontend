// src/components/ui/footer/BrowserFooter.tsx

"use client";

import Link from "next/link";

interface BrowserFooterProps {
  theme?: "dark" | "light"; // defaults to dark mode
}

export function BrowserFooter({ theme = "dark" }: BrowserFooterProps) {
  const baseClasses =
    "absolute bottom-4 left-0 right-0 z-10 text-xs sm:text-sm";
  const navClasses =
    "flex justify-center space-x-6";

  // Theme-specific text colors
  const textColor =
    theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <footer className={`${baseClasses}`}>
      <nav className={`${navClasses} ${textColor}`}>
        <Link href="/terms" className="hover:text-brand-accent">
          Terms of Use
        </Link>
        <Link href="/privacy" className="hover:text-brand-accent">
          Privacy Policy
        </Link>
        <Link href="/contact" className="hover:text-brand-accent">
          Contact
        </Link>
      </nav>
    </footer>
  );
}
