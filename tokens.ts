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

    // 🎨 Avatar Color Palette (deterministic assignment by child_id)
    avatar: {
      teal: {
        primary: "#0D9488", // Tailwind teal-600
        light: "#5EEAD4",   // Tailwind teal-300
      },
      blue: "#2563EB",      // Tailwind blue-600
      indigo: "#4F46E5",    // Tailwind indigo-600
      purple: "#9333EA",    // Tailwind purple-600
      slate: "#475569",     // Tailwind slate-600 (fallback)
    },

    // 🎨 Parent-facing theme (used for OTP inputs + other parent UI elements)
    parent: {
      teal: {
        bgInactive: "#CCFBF1", // teal-100 — very light, input empty
        bgActive: "#99F6E4",   // teal-200 — input filled
        border: "#0D9488",     // teal-600 — focus border
        text: "#0F766E",       // teal-700 — filled text
      },
      error: {
        border: "#DC2626",     // red-600
        bg: "#FEE2E2",         // red-200
        text: "#B91C1C",       // red-700
      },
    },
  },

  fontSize: {
    hero: "32px",
    h1_lg: "40px",
    h1_xl: "48px",
    h1_2xl: "56px",
    h2: "24px",        // 👈 New token for section headers
    h2_lg: "28px",   // 👈 new size for section anchors
    h3: "20px",        // 👈 Optional: if you want a smaller scale
    body: "16px",
    caption: "14px",
  },
  lineHeight: {
    hero: "1.2",
    h2: "1.3",         // tighter than body
    h2_lg: "1.3",
    h3: "1.3",
    body: "1.4",
    caption: "1.3",
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
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};
