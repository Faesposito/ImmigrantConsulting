
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
				custom: "0 0 12px 0 rgba(0, 0, 0, 0.3) ",
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
				"85v": "85vh",
				"90v": "90vh",
				"95v": "95vh",
				"100v": "100vh",
				"200v": "200vh",
			},

			colors: {
				primary: "#562787",
				secondary: "#8b5cf6",
				terciary: "#ffd700",
			},

		},
		fontFamily: {
			"Titilium-Web": ['"Titilium Web"'],
		},
		
	},
	variants: {
		borderWidth: ["responsive", "hover", "focus"],
		extend: {
			transform: ["hover", "focus"],
		},
	},
	plugins: [require("tailwind-scrollbar")],
};