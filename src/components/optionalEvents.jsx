import * as React from "react";

// MaterialUI components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EventCard from "./optionalEventCard";

import { Typography } from "@mui/material/";

import "./style.css";

export default function SimplePaper({ optionalEvents, addToSchedule }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				flexBasis: "600px",
				flexGrow: 0,
				"& > :not(style)": {
					m: 1,
				},
			}}>
			<Paper
				elevation={1}
				sx={{ backgroundColor: "#f5f5f5", padding: "15px", width: "100%" }}>
				<Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
					Add events
				</Typography>

				{/* If events exist, display them. If not, display no events message */}

				{optionalEvents.length ? (
					optionalEvents.map((item) => (
						<EventCard item={item} addToSchedule={addToSchedule} />
					))
				) : (
					<Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
						No events have been added, please check back later
					</Typography>
				)}
			</Paper>
		</Box>
	);
}
