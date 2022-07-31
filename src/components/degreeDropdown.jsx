import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
	const handleChange = (event) => {
		props.changeMade(["Degree", event.target.value]);
	};

	return (
		<Box sx={{ backgroundColor: "transparent", border: "none" }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">
					Select your degree program
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					sx={{ backgroundColor: "white" }}
					id="demo-simple-select"
					value={props.degreeSelected}
					label="Degree"
					onChange={handleChange}>
					<MenuItem value={"Bachelor of Laws (from Bachelor of Arts)"}>
						Bachelor of Laws (from Bachelor of Commerce)
					</MenuItem>
					<MenuItem value={"Bachelor of Laws (from Bachelor of Commerce)"}>
						Bachelor of Laws (from Bachelor of Economics)
					</MenuItem>
					<MenuItem value={"Bachelor of Laws (from Bachelor of Economics)"}>
						Bachelor of Laws (from Bachelor of Engineering Honours)
					</MenuItem>
					<MenuItem
						value={"Bachelor of Laws (from Bachelor of Engineering Honours)"}>
						Bachelor of Laws (from Bachelor of Arts)
					</MenuItem>
					<MenuItem value={"Bachelor of Laws (from Bachelor of Science)"}>
						Bachelor of Laws (from Bachelor of Science)
					</MenuItem>
					<MenuItem value={"Master of Administrative Law"}>
						Master of Administrative Law
					</MenuItem>
					<MenuItem value={"Master of Health Law"}>
						Master of Health Law
					</MenuItem>
					<MenuItem value={"Master of Labour Law and Relations"}>
						Master of Labour Law and Relations
					</MenuItem>
					<MenuItem value={"Master of Laws"}>Master of Laws</MenuItem>
					<MenuItem value={"Master of Business Law"}>
						Master of Business Law
					</MenuItem>
					<MenuItem value={"Master of Criminology"}>
						Master of Criminology
					</MenuItem>
					<MenuItem value={"Master of Environmental Law"}>
						Master of Environmental Law
					</MenuItem>
					<MenuItem value={"Master of International Law"}>
						Master of International Law
					</MenuItem>
					<MenuItem value={"Master of Taxation Law"}>
						Master of Taxation Law
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
