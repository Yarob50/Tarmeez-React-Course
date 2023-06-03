import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { add, printHello } from "./features/calcs/calcSlice";

function App() {
	const resultState = useSelector((state) => {
		return state.calc.result;
	});

	const dispatch = useDispatch();

	console.log(resultState);
	const [firstNumberInput, setFirstNumberInput] = useState(null);
	const [secondNumberInput, setSecondNumberInput] = useState(null);
	const [result, setResult] = useState(null);

	// EVENT HANDLERS
	function handleSumClick() {
		console.log("dispatching the add action from App.js component");
		// dispatch(add());

		dispatch(
			add({
				firstNumber: firstNumberInput,
				secondNumber: secondNumberInput,
			})
		);
		// const result = Number(firstNumberInput) + Number(secondNumberInput);
		// setResult(result);
	}

	function handleSubClick() {
		const result = Number(firstNumberInput) - Number(secondNumberInput);
		setResult(result);
	}

	function handleMultClick() {
		const result = Number(firstNumberInput) * Number(secondNumberInput);
		setResult(result);
	}

	function handleDivClick() {
		const result = Number(firstNumberInput) / Number(secondNumberInput);
		setResult(result);
	}

	return (
		<div className="App">
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					background: "teal",
				}}
			>
				{/* FIRST INPUT */}
				<label>First Number</label>
				<input
					value={firstNumberInput}
					onChange={(e) => setFirstNumberInput(e.target.value)}
				/>

				{/* SECOND INPUT */}
				<label>Second Number</label>
				<input
					value={secondNumberInput}
					onChange={(e) => setSecondNumberInput(e.target.value)}
				/>

				<button onClick={handleSumClick}>sum</button>

				<button onClick={handleSubClick}>subtract</button>

				<button onClick={handleMultClick}>multiply</button>

				<button onClick={handleDivClick}>divide</button>

				<hr />

				<h2>{resultState}</h2>
			</div>
		</div>
	);
}

export default App;
