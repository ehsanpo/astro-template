/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff9ec",
          100: "#fff2d3",
          200: "#ffe2a6",
          300: "#ffcc6e",
          400: "#ffaa33",
          500: "#ff8f0c",
          600: "#fd7702",
          700: "#ca5704",
          800: "#a0430c",
          900: "#81390d",
          950: "#461a04",
        },
        secondary: {
          50: "#ffeff3",
          100: "#ffe0e9",
          200: "#ffc6d8",
          300: "#ff97b8",
          400: "#ff5d93",
          500: "#ff2474",
          600: "#ff0066",
          700: "#d70056",
          800: "#b40051",
          900: "#99024b",
          950: "#570024",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        basement: ["Basement", "sans-serif"],
        inter: ["InterVariable", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
