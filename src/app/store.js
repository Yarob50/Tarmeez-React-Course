import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/calcs/calcSlice";

export const store = configureStore({
	reducer: {
		calc: calcReducer,
	},
});
