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

		subtract: (currentState, action) => {
			const { firstNumber, secondNumber } = action.payload;
			currentState.result = firstNumber - secondNumber;
		},
	},
});

export const { add, subtract } = calcSlice.actions;

export default calcSlice.reducer;
