import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: { DEFAULT: "#1A1410", 800: "#2A221C", 700: "#3A3028" },
        cream: { DEFAULT: "#F4EDE3", 100: "#FAF6F0", 200: "#E8DCC8" },
        ember: { DEFAULT: "#C45C26", 600: "#A84A1C", 400: "#E07A3A" },
        gold: { DEFAULT: "#C9A227", 300: "#E0C056" },
        earth: { DEFAULT: "#6B4F3A" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -20px rgba(26,20,16,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
