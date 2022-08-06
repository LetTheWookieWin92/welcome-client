import * as React from "react";

//MUI components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// Simple card with click action for orientation materials
export default function ActionAreaCard({ item }) {
	return (
		<Card sx={{ width: 250, margin: 1, backgroundColor: "#f5f5f5" }}>
			<CardActionArea href={item.url} target="_blank">
				<CardContent>
					<img src={item.imageURL} width="60" height="60" alt="Icon" />
					<Typography gutterBottom variant="h5" component="div">
						{item.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
