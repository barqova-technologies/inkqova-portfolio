import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand — amber/gold lightning from the iQ mark
        gold: {
          DEFAULT: "#F5A623",
          deep: "#E07B00",
          soft: "#FBC15E",
        },
        ink: {
          DEFAULT: "#0E0E10",
          soft: "#1A1A1F",
        },
        dark: {
          bg: "#0B0B0D",
          surface: "#15151A",
        },
        light: {
          bg: "#FAF7F1",
          surface: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        label: ["var(--font-space-grotesk)", "monospace"],
      },
      maxWidth: {
        container: "1400px",
      },
      boxShadow: {
        glow: "0 0 45px rgba(245,166,35,0.20)",
        "glow-lg": "0 0 70px rgba(245,166,35,0.28)",
        soft: "0 18px 50px -20px rgba(20,16,8,0.30)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-rev": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245,166,35,0.28)" },
          "50%": { boxShadow: "0 0 40px rgba(245,166,35,0.5)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.9" },
          "50%": { transform: "translate3d(0,-5%,0) scale(1.1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-130%)" },
          "100%": { transform: "translateX(130%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "1" },
          "50%": { opacity: "0.45" },
          "55%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "spin-rev": "spin-rev 42s linear infinite",
        "glow-pulse": "glow-pulse 2.6s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        aurora: "aurora 14s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        flicker: "flicker 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
