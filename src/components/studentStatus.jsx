import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxesGroup() {
	const [state, setState] = React.useState({
		domestic: false,
		international: false,
	});

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	const { domestic, international } = state;
	const error = [domestic, international].filter((v) => v).length !== 2;

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
				<FormLabel component="legend">Student status</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={domestic}
								color="secondary"
								onChange={handleChange}
								name="domestic"
							/>
						}
						label="Domestic"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={international}
								color="secondary"
								onChange={handleChange}
								name="international"
							/>
						}
						label="International"
					/>
				</FormGroup>
			</FormControl>
		</Box>
	);
}
