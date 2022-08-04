import * as React from "react";
import Card from "@mui/material/Card";
import { IconButton, Typography } from "@mui/material/";
import RemoveIcon from "@mui/icons-material/Remove";

import "./style.css";

import Moment from "moment";

export default function BasicCard({ item, removeFromSchedule }) {
	// Change date to readable format
	function formatDate(date) {
		return Moment(date).format("dddd D MMMM, h:mm");
	}

	return (
		<Card
			sx={{
				marginBottom: "10px",
				marginTop: "10px",
				height: "60px",
			}}>
			<div className="eventCardContainer">
				<div>
					{item.clashing ? (
						<Typography variant="eventCardDateWarning" component="div">
							{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}{" "}
							(Event clashes)
						</Typography>
					) : (
						<Typography variant="eventCardDate" component="div">
							{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}
						</Typography>
					)}

					<Typography variant="eventCardTitle" component="div">
						{item.name}
					</Typography>
				</div>
				{item.compulsory !== true && (
					<IconButton
						edge="start"
						color="secondary"
						aria-label="Remove"
						onClick={() => {
							removeFromSchedule(item);
						}}>
						<RemoveIcon />
					</IconButton>
				)}
			</div>
		</Card>
	);
}
