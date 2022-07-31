import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup(props) {
	const handleChange = (event) => {
		props.changeMade(["English", event.target.value]);
	};

	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">
				Is English your first language?
			</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
				onChange={handleChange}
				value={props.englishSelected}>
				<FormControlLabel
					value="Yes"
					control={<Radio color="secondary" />}
					label="Yes"
				/>
				<FormControlLabel
					value="No"
					control={<Radio color="secondary" />}
					label="No"
				/>
			</RadioGroup>
		</FormControl>
	);
}
