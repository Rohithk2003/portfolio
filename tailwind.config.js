/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sf)", "Helvetica", "Arial", "sans-serif"],
				mono: ["var(--font-ca)", "Courier New", "monospace"],
				calibre: ["var(--font-calibre)", "Georgia", "serif"],
				sf_pro: ["var(--font-sf-pro)", "Arial", "sans-serif"],
				sf_display: [
					"var(--font-sf-display)",
					"Helvetica",
					"Arial",
					"sans-serif",
				],
			},
			animation: {
				"text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
			},
			keyframes: {
				"text-reveal": {
					"0%": {
						transform: "translate(0, 100%)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
