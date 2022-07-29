import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { makeStyles } from "@mui/styles";

//Images
import logo from "../images/Logo.jpeg";

import { Typography } from "@mui/material/";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		backgroundColor: "#ffffff",
		borderBottom: "solid #BFBFBF 1px",
	},

	title: {
		textAlign: "center",
	},

	item1: {
		//backgroundColor: "#ffffdb",
	},

	item2: {
		//backgroundColor: "#f5f5f5",
	},

	item3: {
		//backgroundColor: "#ffffdb",
	},
});

const NavigationBar = ({ backLabel, backPressed, showBack }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar position="static" elevation={0} className={classes.root}>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}></Typography>
					<Typography variant="h6" className={classes.title}>
						<img src={logo} width="200px" alt="Content Missing" />
					</Typography>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Welcome Planner
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default NavigationBar;
