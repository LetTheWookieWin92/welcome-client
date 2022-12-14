import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Brand palette used as theme, which is passed down through component tree
let theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#000000",
		},
	},
	typography: {
		fontFamily: "sans-serif",
		h1: {
			fontSize: 24,
			marginTop: 20,
			marginLeft: 20,
			marginRight: 20,
			marginBottom: 10,
			fontWeight: "bold",
			textAlign: "center",
		},
		h2: {
			fontSize: 22,
			marginTop: 10,
			marginLeft: 25,
			marginRight: 20,
			marginBottom: 10,
			fontWeight: "bold",
		},
		h3: {
			fontSize: 19,
			marginTop: 10,
			marginLeft: 25,
			marginRight: 20,
			marginBottom: 10,
			textAlign: "center",
			color: "#36454F",
		},
		h4: {
			fontSize: 20,
			marginTop: 10,
			marginLeft: 25,
			marginRight: 20,
			marginBottom: 10,
		},
		// Card titles
		h5: {
			fontSize: 15,
			marginTop: 10,
			marginLeft: 5,
			marginRight: 5,
			marginBottom: 10,
			fontWeight: "bold",
		},
		// Nav bar titles only
		h6: {
			fontSize: 20,
		},
		// Normal paragraph text
		body1: {
			fontSize: 13,
			marginTop: 15,
			marginLeft: 30,
			marginRight: 30,
			marginBottom: 15,
			textAlign: "center",
			color: "grey",
		},
		// Labels with no padding and lighter shade
		body2: {
			fontSize: 13,
			marginTop: 0,
			marginLeft: 5,
			marginRight: 5,
			marginBottom: 0,
			textAlign: "left",
			color: "#9c9c9c",
		},

		eventCardDate: {
			fontSize: 13,
			margin: 5,
			textAlign: "left",
			color: "#9c9c9c",
		},

		eventCardDateWarning: {
			fontSize: 13,
			margin: 5,
			textAlign: "left",
			color: "#e34331",
		},

		eventCardTitle: {
			fontSize: 15,
			margin: 5,
			fontWeight: "bold",
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
