/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export const darkMode = "class";
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },
  extend: {
    colors: {
      "light-theme": "#fafafa",
      "dark-theme": "#121212",
      available: "#22c55e",
    },
    backgroundImage: {
      "midnight-city": "linear-gradient(to right, #232526, #414345)",
      mystic: "linear-gradient(to right, #D7DDE8, #757F9A)",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      dancingScript: ["var(--font-dancingScript)"],
    },
    animation: {
      "slow-spin": "spin 10s linear infinite",
      wiggle: "wiggle 1s ease-in-out infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
  },
};
export const plugins = [];
