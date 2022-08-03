import * as React from "react";

// MaterialUI components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Button, Typography } from "@mui/material/";

import Moment from "moment";

export default function SimplePaper({ scheduleEvents, removeFromSchedule }) {
	// Change date to readable format
	function formatDate(date) {
		return Moment(date).format("dddd D MMMM, h:mm a");
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				"& > :not(style)": {
					m: 1,
					maxWidth: 600,
					minWidth: 300,
				},
			}}>
			<Paper elevation={1} sx={{ backgroundColor: "#f5f5f5", padding: "15px" }}>
				<Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
					Your Schedule
				</Typography>

				{/* If events exist, display them. If not, display no events message */}
				<ul>
					{scheduleEvents.length ? (
						scheduleEvents.map((item) => (
							<li key={item.id}>
								<b>{formatDate(item.date)}</b>: {item.name}{" "}
								{item.compulsory !== true ? (
									<Button
										color="secondary"
										onClick={() => {
											removeFromSchedule(item);
										}}>
										Remove
									</Button>
								) : (
									console.log(".")
								)}
							</li>
						))
					) : (
						<li>Nothing to show</li>
					)}
				</ul>

				{/*<Button variant="contained" color="secondary">
					Download PDF
                    </Button>*/}
			</Paper>
		</Box>
	);
}
