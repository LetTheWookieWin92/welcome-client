import * as React from "react";

// MaterialUI components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material/";

export default function SimplePaper({ scheduleEvents }) {
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
						scheduleEvents.map((item) => <li key={item.id}>{item.name}</li>)
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
