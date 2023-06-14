import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReducer from "./weatherApiSlice";

export default configureStore({
	reducer: { weather: weatherApiSliceReducer },
});
