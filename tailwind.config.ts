import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Typography aliases from tokens
      fontSize: {
        hero: "var(--font-fontSize-hero)",
        "h1-lg": "var(--font-fontSize-h1_lg)",
        "h1-xl": "var(--font-fontSize-h1_xl)",
        "h1-2xl": "var(--font-fontSize-h1_2xl)",
        body: "var(--font-fontSize-body)",
        caption: "var(--font-fontSize-caption)",
      },
      fontFamily: {
        primary: "var(--font-fontFamily-primary)",
        accent: "var(--font-fontFamily-accent)",
        // 🔥 Add serif for hero headline
        serif: ["Georgia", "serif"],
      },

      // Color aliases from tokens
      colors: {
        bg: {
          light: "var(--color-bg-light)",
          lightAlt: "var(--color-bg-lightAlt)",
          dark: "var(--color-bg-dark)",
          darkAlt: "var(--color-bg-darkAlt)",
        },
        text: {
          primaryLight: "var(--color-text-primaryLight)",
          secondaryLight: "var(--color-text-secondaryLight)",
          primaryDark: "var(--color-text-primaryDark)",
          secondaryDark: "var(--color-text-secondaryDark)",
        },
        brand: {
          primary: "var(--color-brand-primary)",
          primaryHover: "var(--color-brand-primaryHover)",
          secondary: "var(--color-brand-secondary)",
          secondaryHover: "var(--color-brand-secondaryHover)",
          // 🔥 New accent orange
          accent: "var(--color-brand-accent)",
          accentHover: "var(--color-brand-accentHover)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          450: "var(--color-gray-450, #A0A0A0)", // mid-gray fallback
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },

        // 🎨 Avatar palette
        avatar: {
          teal: {
            primary: "var(--color-avatar-teal-primary)",
            light: "var(--color-avatar-teal-light)",
          },
          blue: "var(--color-avatar-blue)",
          indigo: "var(--color-avatar-indigo)",
          purple: "var(--color-avatar-purple)",
          slate: "var(--color-avatar-slate)",
        },

        // 🎨 Parent-facing theme (used for inputs + parent UI)
        parent: {
          teal: {
            bgInactive: "var(--color-parent-teal-bgInactive)",
            bgActive: "var(--color-parent-teal-bgActive)",
            border: "var(--color-parent-teal-border)",
            text: "var(--color-parent-teal-text)",
          },
          error: {
            border: "var(--color-parent-error-border)",
            bg: "var(--color-parent-error-bg)",
            text: "var(--color-parent-error-text)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
