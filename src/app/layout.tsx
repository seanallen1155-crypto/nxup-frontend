// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ✅ Fonts (Manrope + Inter from Google)
import { Manrope, Inter } from "next/font/google";

// ✅ NXUP Theme (import ensures tree-shaking includes theme tokens)
import { nxupTheme } from "theme";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NXUP",
  description: "Your game. Your brand. Your NIL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="
          bg-background 
          text-body        /* ✅ default body font size + color */
          antialiased 
          font-sans
        "
      >
        {children}
      </body>
    </html>
  );
}
