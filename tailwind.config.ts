import type { Config } from "tailwindcss"
import { nxupTheme } from "./theme"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...nxupTheme.theme.extend,  // ✅ merge brand theme
    },
  },
  plugins: [],
}

export default config
