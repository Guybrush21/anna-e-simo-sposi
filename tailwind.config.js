/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      scale: {
        "-1": "-1",
      },
      backgroundImage: {
        annaesimo: "url(/as-header.jpg)",
        angle: "url(/lavanda-angle.png)",
        lavandaCircle: "url(/lav-circle.svg)",
        noise: "url(/noise.svg)",
      },
      fontFamily: {
        display: [
          "Courgette",
          "FreestyleScript",
          "cursive",
          ...defaultTheme.fontFamily.sans,
        ],
        pynion: "Pinyon Script",
        decorative: "Oleo Script",
        sans: ['"Crimson Text"', "sans-serif"],
      },
      colors: {
        buttermilk: {
          50: "#fff9eb",
          100: "#ffeec6",
          200: "#ffde91",
          300: "#ffc34a",
          400: "#ffab20",
          500: "#f98707",
          600: "#dd6102",
          700: "#b74106",
          800: "#94310c",
          900: "#7a290d",
          950: "#461302",
        },
        marte: {
          500: "#C45911"
        },
        lavanda: {
          50: "#f9f6fe",
          100: "#f1e9fe",
          200: "#e5d7fd",
          300: "#d3bafa",
          400: "#b68bf5",
          500: "#9a5eee",
          600: "#823de0",
          700: "#6e2cc4",
          800: "#5f29a0",
          900: "#4e2281",
          950: "#320c5f",
        },
      },
    },
  },
  plugins: [],
};
