/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],

  theme: {
    extend: {
      colors: {
        white: "#F9F4EA",
        offwhite: "#DAD3CA",
        opium: "#8A7F7D",
        secondary: {
          50: "#f7f3ff",
          100: "#efe9fe",
          200: "#e2d6fe",
          300: "#cbb5fd",
          400: "#ad8bfa",
          500: "#8b5cf6",
          600: "#713aed",
          700: "#5e28d9",
          800: "#4e21b6",
          900: "#421d95",
          950: "#2a1065",
        },
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
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        scroll: "scroll 30s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "300% 300%",
            "background-position": "right center",
          },
        },
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      fontFamily: {
        inter: ["InterVariable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        basement: ["Basement", "sans-serif"],
        aileron: ["Aileron", "sans-serif"],
        KAUFMANB: ["KAUFMANB", "sans-serif"],
        Stinger: ["Stinger", "sans-serif"],
        Kabel: ["Kabel", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
