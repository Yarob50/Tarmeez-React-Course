import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicButtons() {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>

			<Typography variant="h1" gutterBottom>
				السلام عليكم
			</Typography>
		</Stack>
	);
}
