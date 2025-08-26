// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";

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
          text-body 
          antialiased 
          font-sans
        "
      >
        {children}
      </body>
    </html>
  );
}
