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
        background: "#0B2038",
        primary: "#B8863A",
        secondary: "#90A7BE",
        surface: "#12315A",
        glow: "#D9A75C"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        space: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 26px rgba(184, 134, 58, 0.28)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
