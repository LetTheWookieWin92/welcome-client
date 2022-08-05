import * as React from "react";
import Card from "@mui/material/Card";
import { IconButton, Typography } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";

import Moment from "moment";

export default function BasicCard({ item, addToSchedule }) {
	// Change date to readable format
	function formatDate(date) {
		return Moment(date).format("dddd D MMMM, h:mm");
	}

	return (
		<Card sx={{ marginBottom: "10px", marginTop: "10px", height: "60px" }}>
			<div className="eventCardContainer">
				<div>
					<Typography variant="eventCardDate" component="div">
						{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}
						{" in "}
						{item.location}
					</Typography>
					<Typography variant="eventCardTitle" component="div">
						{item.name}
					</Typography>
				</div>
				<IconButton
					edge="start"
					color="secondary"
					aria-label="Add"
					onClick={() => {
						addToSchedule(item);
					}}>
					<AddIcon />
				</IconButton>
			</div>
		</Card>
	);
}
