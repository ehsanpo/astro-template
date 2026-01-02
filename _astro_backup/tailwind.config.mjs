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
					50: "#ecfdff",
					100: "#cef7ff",
					200: "#a4eefd",
					300: "#47d9fa",
					400: "#1fc7f1",
					500: "#03aad7",
					600: "#0686b4",
					700: "#0c6c92",
					800: "#145876",
					900: "#154964",
					950: "#072f45",
				},
				neutral: {
					900: "#050809",
					800: "#072f45",
				},
				primary: {
					50: "#fefce8",
					100: "#fffac2",
					200: "#fff187",
					300: "#ffe243",
					400: "#ffd224",
					500: "#efb503",
					600: "#ce8b00",
					700: "#a46204",
					800: "#884c0b",
					900: "#733f10",
					950: "#432005",
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
				basement: ["Basement", "sans-serif"],
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
