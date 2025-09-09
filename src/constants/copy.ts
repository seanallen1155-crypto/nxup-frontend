import { APP_NAME } from "./app";

export const copy = {
  landing: {
    heroHeadline: "Your NIL Journey Starts Here",

    subtext:
      "Built for high school athletes like you! Free, supportive, & always in your control.",

    cta: "Start My NIL Journey",

    login: `Already an ${APP_NAME} user? Log in`,

    parents: "For Parents: How It Works",

    footer: {
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      contact: "Contact",
    },
  },
} as const;
