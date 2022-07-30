import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import DegreeDropdown from "./degreeDropdown";
import StudentStatus from "./studentStatus";
import EnglishStatus from "./englishStatus";
import CommonLawStatus from "./commonLawStatus";
import Button from "@mui/material/Button";

export default function SimplePaper() {
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
				<DegreeDropdown />
				<StudentStatus />
				<EnglishStatus />
				<CommonLawStatus />
				<Button variant="contained" color="secondary">
					Create schedule
				</Button>
			</Paper>
		</Box>
	);
}
