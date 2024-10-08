import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: "var(--color1)",
        color2: "var(--color2)",
        card1: "var(--card1)",
        card2: "var(--card2)",
        card3: "var(--card3)",
        card4: "var(--card4)",
        card5: "var(--card5)",
        card6: "var(--card6)",
      }
    }
  }
}
export default config
