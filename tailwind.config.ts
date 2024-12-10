import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        "logo": ["Potta One", "system-ui"] 
      },
      colors: {
        "primary": "#D9AC84",
        "secondary": "#A67A53",
        "tertiary": "#8C583A",
        "text": "#402D1D",
        "background": "#fdeddf"
      }
    },
  },
  plugins: [],
} satisfies Config;
