// Design Tokens - Source of Truth
// All tokens for colors, typography, radii, shadows, motion, etc.
// This file drives tokens.css and should be kept authoritative.

export const tokens = {
  colors: {
    bg: {
      light: "#FFFFFF",
      lightAlt: "#F5F5F5",
      dark: "#121212",
      darkAlt: "#1E1E1E",
    },
    text: {
      primaryLight: "#000000",
      secondaryLight: "#333333",
      primaryDark: "#FFFFFF",
      secondaryDark: "#B3B3B3",
    },
    brand: {
      primary: "#0066FF",
      primaryHover: "#0052CC",
      secondary: "#FF4081",
      secondaryHover: "#E73370",
      // 🔥 New Accent Orange
      accent: "#FF5A1F",
      accentHover: "#E64500",
    },
    gray: {
      100: "#FAFAFA",
      200: "#F5F5F5",
      300: "#E0E0E0",
      400: "#BDBDBD",
      450: "#A0A0A0", // mid-gray for trust cues
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },

  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      accent: "'Bebas Neue', sans-serif",
      serif: "'Georgia', serif", // 🔥 New serif font for premium headlines
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    fontSize: {
      hero: "32px", // UX spec for mobile-first hero headline
      h1_lg: "40px",
      h1_xl: "48px",
      h1_2xl: "56px",
      body: "16px",
      caption: "14px",
    },
    lineHeight: {
      hero: "1.2",
      body: "1.4",
      caption: "1.3",
    },
  },

  radii: {
    sm: "4px",
    md: "12px", // 🔥 used for overlay card
    lg: "16px",
    full: "9999px",
  },

  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0px 10px 15px rgba(0, 0, 0, 0.15)",
  },

  motion: {
    duration: {
      fast: "150ms",
      medium: "300ms",
      slow: "500ms",
    },
    easing: {
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0, 0.2, 1)",
    },
    scale: {
      tap: "0.96",
      hover: "1.02",
    },
  },
} as const;