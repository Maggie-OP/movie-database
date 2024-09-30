import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "Arial", "sans-serif"],
      },
      colors: {
        "blue-1000": "#032541",
        "blue-100": "#01B4E4",
        "gray-100": "#e3e3e3",
        "gray-900": "#081c22",
      },
      fontSize: {
        "text-sup": ["4px", "4px"],
        base: ["16px", "18px"],
        xl: ["18px", "24px"],
        xxl: ["20px", "20px"],
        "heading-3": ["20px", "20px"],
        "heading-1": ["26px", "32px"],
        "footer-text": ["18px", "24px"],
        "pagination-btn": ["24px", "28px"],
        m: ["14px", "14px"],
      },
      boxShadow: {
        shadow: "0 2px 8px 0 rgb(0,0,0,0.1)",
      },
      gridTemplateColumns: {
        "movie-card": "repeat(auto-fit, minmax(176px, auto))",
      },
    },
  },
  plugins: [],
};
export default config;
