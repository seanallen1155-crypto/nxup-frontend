// tokens.ts
// Master design tokens for brand system.
// Use this as the SINGLE SOURCE OF TRUTH.
// Tailwind config, CSS variables, and Storybook all import from here.

export const tokens = {
  colors: {
    bg: {
      dark: "#121212",
      darkAlt: "#1E1E1E",
      light: "#FFFFFF",
      lightAlt: "#F8F9FA",
    },
    text: {
      primaryDark: "#FFFFFF",
      secondaryDark: "#B3B3B3",
      primaryLight: "#121212",
      secondaryLight: "#555555",
    },
    brand: {
      primary: "#3D5AFE",
      primaryHover: "#304FFE",
      secondary: "#FF4081",
      secondaryHover: "#F50057",
    },
    semantic: {
      success: "#00E676",
      warning: "#FFB300",
      error: "#FF1744",
      info: "#29B6F6",
    },
    gray: {
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

  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      accent: "'Inter Bold', sans-serif",
    },
    fontSize: {
      hero: "32px",
      h2: "24px",
      h3: "20px",
      body: "16px",
      caption: "14px",
      // responsive scaling
      h1_lg: "40px",
      h1_xl: "45px",
      h1_2xl: "52px",
    },
    lineHeight: {
      hero: "1.2",
      body: "1.5",
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
    },
    letterSpacing: {
      default: "0px",
      heading: "1px",
    },
  },

  radii: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    full: "9999px", // only for avatars/chips
  },

  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.1)",
    md: "0 4px 8px rgba(0,0,0,0.15)",
    lg: "0 8px 20px rgba(0,0,0,0.2)",
    darkModeMd: "0 4px 8px rgba(0,0,0,0.15)", // reduced opacity in dark mode
  },

  spacing: {
    buttonPaddingX: "16px",
    buttonPaddingY: "12px",
    inputHeight: "44px",
  },

  motion: {
    duration: {
      fast: "150ms",
      medium: "300ms",
      slow: "500ms",
      confetti: "800ms",
    },
    ease: {
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      swipe: "cubic-bezier(0.22, 1, 0.36, 1)",
      confetti: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    scale: {
      tap: "0.98",
      hover: "1.02",
    },
    delay: {
      default: "0ms",
      tooltip: "200ms",
    },
    swipe: {
      threshold: 0.5,
      duration: "250ms",
    },
  },

  zIndex: {
    base: "0",
    dropdown: "1000",
    sticky: "1100",
    modal: "1200",
    toast: "1300",
    tooltip: "1400",
  },

  layout: {
    container: {
      sm: "100%",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1200px",
    },
    gutter: "24px",
    containerPadding: "16px",
  },

  toast: {
    stackGap: "12px",
    maxVisible: 3,
  },
};
