
module.exports = {
	purge: {
		enabled: true,
		content: [
			'./**/*.html',
			'./**/*.razor'
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				custom: "0 1px 2px 0 #562787",
				customInner: "inset 0 2px 4px 0 #562787",
			},
			minWidth: {
				md: "28rem",
			},
			height: {
				"10v": "10vh",
				"15v": "15vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"45v": "45vh",
				"50v": "50vh",
				"60v": "60vh",
				"65v": "65vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"95v": "95vh",
				"100v": "100vh",
			},

			colors: {
				primary: "#562787",
				secondary: "#8b5cf6",
				terciary: "#ffd700",
			},

		},
		fontFamily: {
			open: ["Open Sans"],
			rale: ["Raleway"],
			source: ["Source Serif Pro"],
			lato: ["Lato"],
		},
		
	},
	variants: {
		borderWidth: ["responsive", "hover", "focus"],
		extend: {},
	},
	plugins: [require("tailwindcss-scroll-snap"), require("tailwind-scrollbar")],
};