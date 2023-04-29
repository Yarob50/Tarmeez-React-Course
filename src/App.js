import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import MySnackBar from "./components/MySnackBar";

import { ToastContext } from "./contexts/ToastContext";
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
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState();

	function showHideToast(message) {
		setOpen(true);
		setMessage(message);
		setTimeout(() => {
			setOpen(false);
		}, 2000);
	}
	return (
		<ThemeProvider theme={theme}>
			<ToastContext.Provider value={{ showHideToast }}>
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
					<MySnackBar open={open} message={message} />
					<TodosContext.Provider value={{ todos, setTodos }}>
						<TodoList />
					</TodosContext.Provider>
				</div>
			</ToastContext.Provider>
		</ThemeProvider>
	);
}

export default App;
