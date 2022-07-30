import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxesGroup() {
	const [state, setState] = React.useState({
		yes: false,
		no: false,
	});

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	const { yes, no } = state;
	const error = [yes, no].filter((v) => v).length !== 2;

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					Are you from a Common Law background?
				</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={yes}
								color="secondary"
								onChange={handleChange}
								name="yes"
							/>
						}
						label="Yes"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={no}
								color="secondary"
								onChange={handleChange}
								name="no"
							/>
						}
						label="No"
					/>
				</FormGroup>
			</FormControl>
		</Box>
	);
}
