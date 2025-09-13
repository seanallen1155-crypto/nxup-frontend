import { Teko } from "next/font/google";

/* 
  Teko (Google font)
  - Used for display / headings / CTA buttons
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
  - Subsets: Latin
*/
export const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

/* 
  Satoshi (custom font, self-hosted in /public/fonts/satoshi)
  - All weights defined in globals.css via @font-face
  - This export just sets up the CSS variable so it can be referenced
  - Available weights: 100, 300, 400, 500, 700, 900
*/
export const satoshi = {
  variable: "--font-satoshi",
  family: "Satoshi, sans-serif",
};
