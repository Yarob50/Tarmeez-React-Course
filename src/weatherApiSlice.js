import { createSlice } from "@reduxjs/toolkit";

const weatherApiSlice = createSlice({
	name: "weatherApi",

	initialState: {
		result: "empty",
	},

	reducers: {
		changeResult: (state, action) => {
			state.result = "changed";
		},
	},
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
