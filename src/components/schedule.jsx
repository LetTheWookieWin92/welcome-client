import YourSchedule from "./yourSchedule";

import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Schedule = ({
	events,
	degree,
	studentStatus,
	englishStatus,
	commonStatus,
	onBackPress,
}) => {
	// All events returned from API
	let allEvents = [];

	// All events on personal schedule
	let scheduleEvents = [];

	// Create event object for each returned from API
	for (let temp of events) {
		let event = {
			id: temp.id,
			name: temp.name,
			description: temp.description,
			date: temp.date,
			presenter: temp.presenter,
			compulsory: false,
		};

		// Mark events as compulsory as necessary
		if (englishStatus === "No" && temp.is_english === true) {
			event.compulsory = true;
		} else if (
			studentStatus === "International" &&
			temp.is_domestic === false
		) {
			event.compulsory = true;
		} else if (commonStatus === "No" && temp.is_common === false) {
			event.compulsory = true;
		} else if (degree === temp.degree) {
			event.compulsory = true;
		}

		// Add to allEvents array
		allEvents.push(event);
	}

	// Add compulsory events to schedule
	scheduleEvents = allEvents.filter(function (event) {
		return event.compulsory === true;
	});

	/*
	console.log(allEvents);
	console.log(scheduleEvents);
    */

	return (
		<React.Fragment>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => {
					onBackPress("Form");
				}}>
				Start again
			</Button>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					"& > :not(style)": {
						m: 1,
					},
				}}>
				<YourSchedule scheduleEvents={scheduleEvents} />
			</Box>
		</React.Fragment>
	);
};

export default Schedule;
