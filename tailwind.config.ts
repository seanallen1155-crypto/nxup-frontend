import type { Config } from "tailwindcss";
import { nxupTheme } from "./theme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      ...nxupTheme.theme.extend,
    },
  },
  plugins: [],
};

export default config;
