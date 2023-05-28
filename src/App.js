import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: ["IBM"],
	},
});
function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Test />
			</ThemeProvider>
		</div>
	);
}

export default App;
