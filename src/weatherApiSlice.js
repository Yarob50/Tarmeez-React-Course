import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
	"weatherApi/fetchWeather",
	async () => {
		console.log("calling fetch weather");
		const response = await axios.get(
			"https://api.openweathermap.org/data/2.5/weather?lat=24.7&lon=46.5&appid=2c511dc8a04616514a9e1ff2f31c8043"
			// {
			// 	cancelToken: new axios.CancelToken((c) => {
			// 		cancelAxios = c;
			// 	}),
			// }
		);

		// handle success
		const responseTemp = Math.round(response.data.main.temp - 272.15);
		const min = Math.round(response.data.main.temp_min - 272.15);
		const max = Math.round(response.data.main.temp_max - 272.15);
		const description = response.data.weather[0].description;
		const responseIcon = response.data.weather[0].icon;

		console.log(response);
		// setTemp({
		// 	number: responseTemp,
		// 	min: min,
		// 	max: max,
		// 	description: description,
		// 	icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
		// });

		return {
			number: responseTemp,
			min,
			max,
			description,
			icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
		};
	}
);
const weatherApiSlice = createSlice({
	name: "weatherApi",

	initialState: {
		result: "empty",
		weather: {},
		isLoading: false,
	},

	reducers: {
		changeResult: (state, action) => {
			state.result = "changed";
		},
	},

	extraReducers(builder) {
		builder
			.addCase(fetchWeather.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchWeather.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log("============**********");

				console.log(state, action);
				state.weather = action.payload;
			})
			.addCase(fetchWeather.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
