import * as React from "react";

//MUI components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// Components for student status form
import DegreeDropdown from "./degreeDropdown";
import StudentStatus from "./studentStatus";
import EnglishStatus from "./englishStatus";
import CommonLawStatus from "./commonLawStatus";

export default function SimplePaper(props) {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: 10,
				"& > :not(style)": {
					m: 1,
					maxWidth: 600,
					minWidth: 300,
				},
			}}>
			<Paper elevation={1} sx={{ backgroundColor: "#f5f5f5", padding: "15px" }}>
				<DegreeDropdown
					degreeSelected={props.degree}
					changeMade={props.onChange}
				/>

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
						marginBottom: "10px",
						"& > :not(style)": {
							m: 1,
						},
					}}>
					{/* Pass form change function to all form sub components to keep track of form entries */}
					<StudentStatus
						statusSelected={props.studentStatus}
						changeMade={props.onChange}
					/>
					<EnglishStatus
						englishSelected={props.englishStatus}
						changeMade={props.onChange}
					/>
					<CommonLawStatus
						commonSelected={props.commonStatus}
						changeMade={props.onChange}
					/>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Button
						variant="contained"
						color="secondary"
						onClick={props.onSubmit}>
						Create schedule
					</Button>
				</Box>
			</Paper>
		</Box>
	);
}
