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
          light: "#F59E0B",
        },
        emerald: {
          DEFAULT: "#059669",
          dark: "#047857",
          light: "#10B981",
        },
        bg: "#F8FAFC",
        surface: "#F1F5F9",
        border: "#E2E8F0",
        text: {
          DEFAULT: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
          dark: "#0F172A",
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
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        premium: "0 20px 50px -12px rgba(15, 23, 42, 0.1)",
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.05)",
        "inner-light": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
