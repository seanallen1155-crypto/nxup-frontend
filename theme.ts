// theme.ts
export const nxupTheme = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#006DFF", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#FF4081", foreground: "#FFFFFF" },
        accent: { DEFAULT: "#FFC107", foreground: "#000000" },
        success: { DEFAULT: "#4CAF50", foreground: "#FFFFFF" },
        warning: { DEFAULT: "#FF9800", foreground: "#000000" },
        error: { DEFAULT: "#F44336", foreground: "#FFFFFF" },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
    },
  },
};
