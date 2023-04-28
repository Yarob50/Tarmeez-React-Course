import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import MySnackBar from "./components/MySnackBar";
const theme = createTheme({
	typography: {
		fontFamily: ["Alexandria"],
	},

	palette: {
		primary: {
			main: "#dd2c00",
		},
	},
});

const initialTodos = [
	{
		id: uuidv4(),
		title: "قراءة كتاب",
		details: "تيسمبتيس يتسبميتس بيمستب",
		isCompleted: false,
	},
	{
		id: uuidv4(),
		title: "قراءة كتاب",
		details: "تيسمبتيس يتسبميتس بيمستب",
		isCompleted: false,
	},
	{
		id: uuidv4(),
		title: "قراءة كتاب",
		details: "تيسمبتيس يتسبميتس بيمستب",
		isCompleted: false,
	},
];

function App() {
	const [todos, setTodos] = useState(initialTodos);
	const [open, setOpen] = useState(true);

	function showHideToast() {
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 2000);
	}
	return (
		<ThemeProvider theme={theme}>
			<div
				className="App"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "#191b1f",
					height: "100vh",
					direction: "rtl",
				}}
			>
				<MySnackBar open={open} />
				<TodosContext.Provider value={{ todos, setTodos }}>
					<TodoList />
				</TodosContext.Provider>
			</div>
		</ThemeProvider>
	);
}

export default App;
