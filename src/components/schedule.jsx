import YourSchedule from "./yourSchedule";
import OptionalEvents from "./optionalEvents";

import React, { useState } from "react";

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
	// All events array contains all events returned from API.
	let allEvents = [];

	// If no events were returned from API, skip
	if (events.length > 0) {
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

			// Mark compulsory events depending on the event's attributes
			if (
				(englishStatus === "No" && temp.is_english === true) ||
				(studentStatus === "International" && temp.is_domestic === false) ||
				(commonStatus === "No" && temp.is_common === false) ||
				degree === temp.degree
			) {
				event.compulsory = true;
			}

			// Add to allEvents
			allEvents.push(event);
		}
	}

	// Filter allEvents for those marked as compulsory and store them in state variable
	let tempCompulsory = allEvents.filter(function (event) {
		return event.compulsory === true;
	});

	const [scheduleEvents, setScheduleEvents] = useState([...tempCompulsory]);

	// Filter allEvents for those not marked as compulsory and store them in state variable
	let tempOptional = allEvents.filter(function (event) {
		return event.compulsory === false;
	});

	const [optionalEvents, setOptionalEvents] = useState([...tempOptional]);

	// Reusable function to sort events chronologically
	function sortEvents(events) {
		return events.sort(function (a, b) {
			return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
		});
	}

	// Adds event to schedule and removes from optional events
	function addToSchedule(event) {
		// Add to schedule events and sort by date
		let tempSchedule = [...scheduleEvents];
		tempSchedule.push(event);
		setScheduleEvents([...sortEvents(tempSchedule)]);

		// Remove from optional events
		let tempOptional = optionalEvents.filter(function (item) {
			return item.id !== event.id;
		});
		setOptionalEvents([...tempOptional]);
	}

	// Removes event from schedule and adds to optional events
	function removeFromSchedule(event) {
		// Add to optional events and sort by date
		let tempOptional = [...optionalEvents];
		tempOptional.push(event);
		setOptionalEvents([...sortEvents(tempOptional)]);

		// Remove from schedule events
		let tempSchedule = scheduleEvents.filter(function (item) {
			return item.id !== event.id;
		});
		setScheduleEvents([...tempSchedule]);
	}

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
					alignItems: "flex-start",
					"& > :not(style)": {
						m: 1,
					},
				}}>
				<YourSchedule
					scheduleEvents={scheduleEvents}
					removeFromSchedule={removeFromSchedule}
				/>
				<OptionalEvents
					optionalEvents={optionalEvents}
					addToSchedule={addToSchedule}
				/>
			</Box>
		</React.Fragment>
	);
};

export default Schedule;
