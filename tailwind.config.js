/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        olivine: {
          50: "#f3f9ec",
          100: "#e4f1d6",
          200: "#cce5b1",
          300: "#aad383",
          400: "#99c76f",
          500: "#6da43e",
          600: "#53822e",
          700: "#416427",
          800: "#365123",
          900: "#304522",
          950: "#17250e",
        },
      },
    },
  },
  plugins: [],
};
