import * as React from "react";

// MaterialUI components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EventCard from "./scheduleEventCard";
import { Button, Typography } from "@mui/material/";

// React-pdf components
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./pdfDocument";

export default function SimplePaper({ scheduleEvents, removeFromSchedule }) {
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
				sx={{
					backgroundColor: "#f5f5f5",
					padding: "15px",
					width: "100%",
				}}>
				<Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
					Your Schedule
				</Typography>

				{/* If events exist, display them. If not, display no events message */}

				{scheduleEvents.length ? (
					scheduleEvents.map((item) => (
						<EventCard item={item} removeFromSchedule={removeFromSchedule} />
					))
				) : (
					<Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
						Add events to get started
					</Typography>
				)}

				{/* If there are events in schedule, display option to download as PDF */}
				{scheduleEvents.length > 0 && (
					<div className="container">
						<PDFDownloadLink
							document={<PdfDocument data={scheduleEvents} />}
							fileName="Sydney Law School - Welcome Schedule.pdf">
							{({ blob, url, loading, error }) =>
								loading ? (
									"Preparing PDF"
								) : (
									<Button variant="contained" color="secondary">
										Download PDF
									</Button>
								)
							}
						</PDFDownloadLink>
					</div>
				)}
			</Paper>
		</Box>
	);
}
