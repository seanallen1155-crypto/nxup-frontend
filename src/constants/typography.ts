export const typography = {
  fontFamily: {
    // Main sans-serif for body copy
    primary: "'Inter', sans-serif",

    // Accent font (already in your system, for emphasis or branding)
    accent: "'Bebas Neue', sans-serif",

    // 🔥 New serif font for premium headlines
    serif: "'Georgia', serif",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },

  fontSize: {
    // Hero headline (mobile-first)
    hero: "32px",

    // Larger headline sizes for responsive scaling
    h1_lg: "40px",
    h1_xl: "48px",
    h1_2xl: "56px",

    // Standard body text
    body: "16px",

    // Smaller caption/microcopy
    caption: "14px",
  },

  lineHeight: {
    hero: "1.2",  // tight for impact headlines
    body: "1.4",  // standard readability
    caption: "1.3",
  },
};
