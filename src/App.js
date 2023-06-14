import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// REACT
import { useEffect, useState } from "react";

// MATERIAL UI COMPONENTS
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

// EXTERNAL LIBRARIES
import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

// REDUX IMPORT
import { useSelector, useDispatch } from "react-redux";
import { changeResult } from "./weatherApiSlice";
import { fetchWeather } from "./weatherApiSlice";

moment.locale("ar");

const theme = createTheme({
	typography: {
		fontFamily: ["IBM"],
	},
});

let cancelAxios = null;

function App() {
	// REDUX CODE
	const dispatch = useDispatch();

	const isLoading = useSelector((state) => {
		console.log("============");
		console.log(state);
		return state.weather.isLoading;
	});

	const temp = useSelector((state) => {
		return state.weather.weather;
	});

	const { t, i18n } = useTranslation();

	// ======== STATES ========= //
	const [dateAndTime, setDateAndTime] = useState("");

	const [locale, setLocale] = useState("ar");

	const direction = locale == "ar" ? "rtl" : "ltr";
	// ======== EVENT HANDLERS ========= //
	function handleLanguageClick() {
		if (locale == "en") {
			setLocale("ar");
			i18n.changeLanguage("ar");
			moment.locale("ar");
		} else {
			setLocale("en");
			i18n.changeLanguage("en");
			moment.locale("en");
		}

		setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
	}
	useEffect(() => {
		// trying redux
		// dispatch(changeResult());

		console.log("dispatching fetch weather from the component");
		dispatch(fetchWeather());

		i18n.changeLanguage(locale);
	}, []);
	useEffect(() => {
		setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
	}, []);
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Container maxWidth="sm">
					{/* CONTENT CONTAINER */}
					<div
						style={{
							height: "100vh",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						{/* CARD */}
						<div
							dir={direction}
							style={{
								width: "100%",
								background: "rgb(28 52 91 / 36%)",
								color: "white",
								padding: "10px",
								borderRadius: "15px",
								boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
							}}
						>
							{/* CONTENT */}
							<div>
								{/* CITY & TIME */}
								<div
									style={{
										display: "flex",
										alignItems: "end",
										justifyContent: "start",
									}}
									dir={direction}
								>
									<Typography
										variant="h2"
										style={{
											marginRight: "20px",
											fontWeight: "600",
										}}
									>
										{t("Riyadh")}
									</Typography>

									<Typography
										variant="h5"
										style={{ marginRight: "20px" }}
									>
										{dateAndTime}
									</Typography>
								</div>
								{/* == CITY & TIME == */}

								<hr />

								{/* CONTAINER OF DEGREE + CLOUD ICON */}
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
									}}
								>
									{/* DEGREE & DESCRIPTION */}
									<div>
										{/* TEMP */}
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											{isLoading ? (
												<CircularProgress
													style={{ color: "white" }}
												/>
											) : (
												""
											)}

											<Typography
												variant="h1"
												style={{ textAlign: "right" }}
											>
												{temp.number}
											</Typography>

											<img src={temp.icon} />
										</div>
										{/*== TEMP ==*/}

										<Typography variant="h6">
											{t(temp.description)}
										</Typography>

										{/* MIN & MAX */}
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
											}}
										>
											<h5>
												{t("min")}: {temp.min}
											</h5>
											<h5 style={{ margin: "0px 5px" }}>
												|
											</h5>
											<h5>
												{t("max")}: {temp.max}
											</h5>
										</div>
									</div>
									{/*== DEGREE & DESCRIPTION ==*/}

									<CloudIcon
										style={{
											fontSize: "200px",
											color: "white",
										}}
									/>
								</div>
								{/*= CONTAINER OF DEGREE + CLOUD ICON ==*/}
							</div>
							{/* == CONTENT == */}
						</div>
						{/*== CARD ==*/}

						{/* TRANSLATION CONTAINER */}
						<div
							dir={direction}
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "end",
								marginTop: "20px",
							}}
						>
							<Button
								style={{ color: "white" }}
								variant="text"
								onClick={handleLanguageClick}
							>
								{locale == "en" ? "Arabic" : "إنجليزي"}
							</Button>
						</div>
						{/*== TRANSLATION CONTAINER ==*/}
					</div>
					{/*== CONTENT CONTAINER ==*/}
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
