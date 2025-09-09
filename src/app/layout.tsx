// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";

// ✅ Add axe-core in dev mode with confirmation log
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const React = require("react");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDOM = require("react-dom");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axe = require("@axe-core/react");

  axe(React, ReactDOM, 1000);
  console.log("✅ axe-core/react accessibility scanner initialized");
}

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
      <body className="bg-bg-light text-text-primaryLight antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
