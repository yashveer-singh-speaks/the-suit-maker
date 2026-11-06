import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: "#FAF7F0",
          DEFAULT: "#F8F3E8",
          muted: "#EFE8D8",
          dark: "#E3DAC1",
        },
        gold: {
          light: "#E2C889",
          DEFAULT: "#C6A15B",
          dark: "#9E7D38",
          shimmer: "#F3DFB0",
        },
        matte: {
          light: "#181818",
          DEFAULT: "#0B0B0B",
          deep: "#050505",
        },
        navy: {
          light: "#163155",
          DEFAULT: "#0B1F3A",
          deep: "#071426",
        },
        charcoal: {
          light: "#404040",
          DEFAULT: "#2B2B2B",
          dark: "#1A1A1A",
        },
        walnut: {
          light: "#72472F",
          DEFAULT: "#5A3825",
          dark: "#3B2418",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(11, 11, 11, 0.15)",
        "luxury-dark": "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
        "gold-glow": "0 0 25px -5px rgba(198, 161, 91, 0.35)",
        "inner-deep": "inset 0 4px 20px 0 rgba(0, 0, 0, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
