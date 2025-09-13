// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { satoshi, teko } from "./fonts"; // ✅ custom font setup

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
      className={`${satoshi.variable} ${teko.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-satoshi), sans-serif", // TODO: promote to tokens (font family)
          backgroundColor: "#FFFFFF", // TODO: promote to tokens (light surface tier0)
          color: "#0E0E0E", // TODO: promote to tokens (neutral ink/primary text)
        }}
      >
        {children}
      </body>
    </html>
  );
}
