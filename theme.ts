import type { Config } from "tailwindcss";

export const nxupTheme: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "#0E0E0E",
        },
        success: {
          DEFAULT: "hsl(var(--color-success))",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "hsl(var(--color-warning))",
          foreground: "#0E0E0E",
        },
        error: {
          DEFAULT: "hsl(var(--color-error))",
          foreground: "#FFFFFF",
        },

        // Backgrounds
        background: "hsl(var(--color-bg))",
        muted: "hsl(var(--color-bg-muted))",

        // Typography
        body: "hsl(var(--color-body))",       // ✅ semantic body text
        caption: "hsl(var(--color-caption))", // ✅ semantic caption text

        // Neutral Grays
        gray: {
          50: "hsl(var(--color-gray-50))",
          100: "hsl(var(--color-gray-100))",
          200: "hsl(var(--color-gray-200))",
          400: "hsl(var(--color-gray-400))",
          600: "hsl(var(--color-gray-600))",
          800: "hsl(var(--color-gray-800))",
        },
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Manrope Variable", "Inter Variable", "system-ui", "sans-serif"],
        mono: ["Menlo", "Monaco", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
};
