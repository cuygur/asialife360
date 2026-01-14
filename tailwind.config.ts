import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: {
          DEFAULT: "#D97706",
          hover: "#B45309",
        },
        emerald: "#059669",
        bg: "#F8FAFC",
        surface: "#F1F5F9",
        border: "#E2E8F0",
        text: {
          DEFAULT: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
      spacing: {
        section: "6rem",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      boxShadow: {
        premium: "0 20px 50px rgba(15, 23, 42, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
