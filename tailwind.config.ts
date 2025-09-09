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
      },

      // Shadows, radii, motion (from tokens)
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
      transitionDuration: {
        fast: "var(--motion-duration-fast)",
        medium: "var(--motion-duration-medium)",
        slow: "var(--motion-duration-slow)",
      },
      transitionTimingFunction: {
        in: "var(--motion-ease-in)",
        out: "var(--motion-ease-out)",
        inOut: "var(--motion-ease-inOut)",
      },
      scale: {
        tap: "var(--motion-scale-tap)",
        hover: "var(--motion-scale-hover)",
      },
    },
  },
  plugins: [],
};

export default config;
