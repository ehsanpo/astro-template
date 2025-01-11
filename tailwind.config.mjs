/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary2: {
          50: "#f7ffe5",
          100: "#ecffc7",
          200: "#d9ff96",
          300: "#befd59",
          400: "#a2f427",
          500: "#91f209",
          600: "#63ae02",
          700: "#4b8407",
          800: "#3e680c",
          900: "#34580f",
          950: "#193102",
        },
        secondary2: {
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
