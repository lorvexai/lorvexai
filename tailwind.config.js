/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background-rgb) / <alpha-value>)",
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        glow: "rgb(var(--color-glow-rgb) / <alpha-value>)",
        panel: "rgb(var(--color-panel-rgb) / <alpha-value>)",
        panel2: "rgb(var(--color-panel-2-rgb) / <alpha-value>)",
        heading: "rgb(var(--color-heading-rgb) / <alpha-value>)"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        space: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 26px rgba(var(--shadow-glow-rgb), 0.28)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
