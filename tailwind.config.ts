import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        sky: {
          600: "#0284c7",
          700: "#0369a1",
        }
      }
    },
  },
  plugins: [],
};
export default config;