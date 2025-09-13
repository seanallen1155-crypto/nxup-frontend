// TODO: once Landing Page specs are validated, refactor inline brand styles into tokens.ts
// and re-map them here for Tailwind class usage.

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Example: background + brand
        bg: {
          light: "var(--color-bg-light)",
          lightAlt: "var(--color-bg-lightAlt)",
          dark: "var(--color-bg-dark)",
          darkAlt: "var(--color-bg-darkAlt)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          450: "var(--color-gray-450)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
        brand: {
          primary: "var(--color-brand-primary)",
          primaryHover: "var(--color-brand-primaryHover)",
          secondary: "var(--color-brand-secondary)",
          secondaryHover: "var(--color-brand-secondaryHover)",
          accent: "var(--color-brand-accent)",
          accentHover: "var(--color-brand-accentHover)",
        },
      },
      borderRadius: {
        sm: "var(--radii-sm)",
        md: "var(--radii-md)",
        lg: "var(--radii-lg)",
        full: "var(--radii-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      fontFamily: {
        inter: ["var(--typography-font-family-primary)", "sans-serif"],
        accent: ["var(--typography-font-family-accent)", "sans-serif"],
        serif: ["var(--typography-font-family-serif)", "serif"],
      },
      fontWeight: {
        regular: "var(--typography-font-weight-regular)",
        medium: "var(--typography-font-weight-medium)",
        bold: "var(--typography-font-weight-bold)",
      },
      fontSize: {
        hero: [
          "var(--typography-font-size-hero)",
          { lineHeight: "var(--typography-line-height-hero)" },
        ],
        h1_lg: [
          "var(--typography-font-size-h1-lg)",
          { lineHeight: "var(--typography-line-height-h1-lg)" },
        ],
        h1_xl: [
          "var(--typography-font-size-h1-xl)",
          { lineHeight: "var(--typography-line-height-h1-xl)" },
        ],
        h1_2xl: [
          "var(--typography-font-size-h1-2xl)",
          { lineHeight: "var(--typography-line-height-h1-2xl)" },
        ],
        h2: [
          "var(--typography-font-size-h2)",
          { lineHeight: "var(--typography-line-height-h2)" },
        ],
        h2_lg: [
          "var(--typography-font-size-h2-lg)",
          { lineHeight: "var(--typography-line-height-h2-lg)" },
        ],
        h3: [
          "var(--typography-font-size-h3)",
          { lineHeight: "var(--typography-line-height-h3)" },
        ],
        body: [
          "var(--typography-font-size-body)",
          { lineHeight: "var(--typography-line-height-body)" },
        ],
        caption: [
          "var(--typography-font-size-caption)",
          { lineHeight: "var(--typography-line-height-caption)" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
