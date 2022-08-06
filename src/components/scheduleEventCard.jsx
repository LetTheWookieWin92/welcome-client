import * as React from "react";

//MUI components
import Card from "@mui/material/Card";
import { IconButton, Typography } from "@mui/material/";
import RemoveIcon from "@mui/icons-material/Remove";

// Additional style sheet
import "./style.css";

// For clean and readable date formatting
import Moment from "moment";

// removeFromSchedule function and event is passed down through props
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
					{/* Conditional rendering depending on whether event is clashing */}
					{item.clashing ? (
						<Typography variant="eventCardDateWarning" component="div">
							{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}
							{" in "}
							{item.location} (Event clashes)
						</Typography>
					) : (
						<Typography variant="eventCardDate" component="div">
							{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}
							{" in "}
							{item.location}
						</Typography>
					)}

					<Typography variant="eventCardTitle" component="div">
						{item.name}
					</Typography>
				</div>
				{item.compulsory !== true ? (
					<IconButton
						edge="start"
						color="secondary"
						aria-label="Remove"
						onClick={() => {
							removeFromSchedule(item);
						}}>
						<RemoveIcon />
					</IconButton>
				) : (
					<Typography variant="eventCardDate" component="div">
						Compulsory
					</Typography>
				)}
			</div>
		</Card>
	);
}
