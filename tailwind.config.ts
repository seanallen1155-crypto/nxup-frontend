import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // scan all source files
  ],
  theme: {
    extend: {
      colors: {
        // brand
        brand: {
          primary: "var(--color-brand-primary)",
          primaryHover: "var(--color-brand-primaryHover)",
          secondary: "var(--color-brand-secondary)",
          secondaryHover: "var(--color-brand-secondaryHover)",
        },
        // gray scale
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
        // semantic
        success: "var(--color-semantic-success)",
        warning: "var(--color-semantic-warning)",
        error: "var(--color-semantic-error)",
        info: "var(--color-semantic-info)",
        // backgrounds
        bg: {
          light: "var(--color-bg-light)",
          lightAlt: "var(--color-bg-lightAlt)",
          dark: "var(--color-bg-dark)",
          darkAlt: "var(--color-bg-darkAlt)",
        },
        // text
        text: {
          primaryLight: "var(--color-text-primaryLight)",
          secondaryLight: "var(--color-text-secondaryLight)",
          primaryDark: "var(--color-text-primaryDark)",
          secondaryDark: "var(--color-text-secondaryDark)",
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
        darkModeMd: "var(--shadow-darkModeMd)",
      },
      fontFamily: {
        sans: ["var(--font-fontFamily-primary)", "sans-serif"],
        accent: ["var(--font-fontFamily-accent)", "sans-serif"],
      },
      fontSize: {
        hero: "var(--font-fontSize-hero)",
        h1_lg: "var(--font-fontSize-h1_lg)",
        h1_xl: "var(--font-fontSize-h1_xl)",
        h1_2xl: "var(--font-fontSize-h1_2xl)",
        h2: "var(--font-fontSize-h2)",
        h3: "var(--font-fontSize-h3)",
        body: "var(--font-fontSize-body)",
        caption: "var(--font-fontSize-caption)",
      },
      lineHeight: {
        hero: "var(--font-lineHeight-hero)",
        body: "var(--font-lineHeight-body)",
      },
      fontWeight: {
        light: "var(--font-fontWeight-light)",
        regular: "var(--font-fontWeight-regular)",
        medium: "var(--font-fontWeight-medium)",
        bold: "var(--font-fontWeight-bold)",
      },
      letterSpacing: {
        default: "var(--font-letterSpacing-default)",
        heading: "var(--font-letterSpacing-heading)",
      },
      transitionDuration: {
        fast: "var(--motion-duration-fast)",
        medium: "var(--motion-duration-medium)",
        slow: "var(--motion-duration-slow)",
        confetti: "var(--motion-duration-confetti)",
      },
      transitionTimingFunction: {
        in: "var(--motion-ease-in)",
        out: "var(--motion-ease-out)",
        inOut: "var(--motion-ease-inOut)",
        swipe: "var(--motion-ease-swipe)",
        confetti: "var(--motion-ease-confetti)",
      },
      scale: {
        tap: "var(--motion-scale-tap)",
        hover: "var(--motion-scale-hover)",
      },
      transitionDelay: {
        default: "var(--motion-delay-default)",
        tooltip: "var(--motion-delay-tooltip)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
