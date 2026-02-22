import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          bg: "#F5F7FA",        // The overall extremely light blue/grey background
          heading: "#707A99",   // "A single platform to" text
          headingBold: "#636F9D", // "manage" and "legal work" text
          paragraph: "#3B4AE8", // The bright blue paragraph text
          accentBlue: "#2541FF",  // The solid blue Billing pill
          accentOrange: "#E17B27", // The solid orange Matters pill
          accentDark: "#2F253C",   // The dark Tasks/Documents pill
          accentPurple: "#A8AEE0"  // The light purple Portal pillow
        },
        portal: {
          orange: "#F97316",
          blue: "#3B82F6",
          dark: "#1E293B",
          light: "#F8FAFC",
        },
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
