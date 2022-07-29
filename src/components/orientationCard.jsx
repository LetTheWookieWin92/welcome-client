import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
	return (
		<Card sx={{ width: 250, margin: 1, backgroundColor: "#f5f5f5" }}>
			<CardActionArea>
				<CardMedia component="img" height="50" image="" alt="Material" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Title
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Description
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
