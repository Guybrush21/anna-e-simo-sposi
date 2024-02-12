/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        annaesimo: "url(/as-header.jpg)",
      },
      fontFamily: {
        display: [
          "FreestyleScript",
          "Crimson Text",
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ['"Crimson Text"', "sans-serif"],
      },
      colors: {
        buttermilk: {
          50: "#fefaec",
          100: "#faeab1",
          200: "#f8e18f",
          300: "#f4cc55",
          400: "#f1b72e",
          500: "#eb9715",
          600: "#d0720f",
          700: "#ac5111",
          800: "#8c3f14",
          900: "#733414",
          950: "#421a06",
        },
      },
    },
  },
  plugins: [],
};
