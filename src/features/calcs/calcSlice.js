import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	result: 100,
};

export const calcSlice = createSlice({
	name: "calculation",
	initialState: initialState,
	reducers: {
		add: (currentState, action) => {
			console.log("calling the reducer for action named: (sum)", action);
			const sum =
				Number(action.payload.firstNumber) +
				Number(action.payload.secondNumber);
			currentState.result = sum;
		},

		printHello: (currentState, action) => {
			console.log("hello", currentState, action);
		},
	},
});

export const { add, printHello } = calcSlice.actions;

export default calcSlice.reducer;
