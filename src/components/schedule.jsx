import YourSchedule from "./yourSchedule";
import OptionalEvents from "./optionalEvents";

import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./style.css";

import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

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
				location: temp.location,
				description: temp.description,
				duration: temp.duration,
				date: temp.date,
				endTime: getEventEndTime(temp.date, temp.duration),
				presenter: temp.presenter,
				compulsory: false,
				clashing: false,
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

	// Caculate event end date/time
	function getEventEndTime(startTime, duration) {
		return Moment(startTime).add(duration, "minutes");
	}

	// Reusable function to sort events chronologically
	function sortEvents(events) {
		return events.sort(function (a, b) {
			return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
		});
	}

	// Check for clash
	function clashCheck(events) {
		let index = 0;
		// For each event in events, check for clash
		for (let firstEvent of events) {
			let firstEventRange = moment.range([firstEvent.date, firstEvent.endTime]);

			let clashCount = 0;
			// Compare with each other event, add clash attribute as necessary
			for (let secondEvent of events) {
				if (firstEvent.id === secondEvent.id) {
				} else {
					let secondEventRange = moment.range([
						secondEvent.date,
						secondEvent.endTime,
					]);

					if (firstEventRange.overlaps(secondEventRange)) {
						clashCount++;
					}
				}
			}

			// If any clashes detected, mark event object as clashing, else not clashing
			clashCount > 0
				? (events[index].clashing = true)
				: (events[index].clashing = false);

			index++;
		}

		return events;
	}

	// Adds event to schedule and removes from optional events
	function addToSchedule(event) {
		// Add to schedule events and sort by date
		let tempSchedule = [...scheduleEvents];
		tempSchedule.push(event);
		tempSchedule = [...clashCheck(tempSchedule)];
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
		tempSchedule = [...clashCheck(tempSchedule)];
		setScheduleEvents([...tempSchedule]);
	}

	return (
		<React.Fragment>
			<div className="container">
				<Button
					variant="contained"
					color="secondary"
					onClick={() => {
						onBackPress("Form");
					}}>
					Start again
				</Button>
			</div>

			<Box
				sx={{
					marginBottom: "100px",
					display: "flex",
					flexWrap: "wrap",
					width: "100%",
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
