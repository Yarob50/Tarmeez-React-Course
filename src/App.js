import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
	const [firstNumberInput, setFirstNumberInput] = useState(null);
	const [secondNumberInput, setSecondNumberInput] = useState(null);
	const [result, setResult] = useState(null);

	// EVENT HANDLERS
	function handleSumClick() {
		const result = Number(firstNumberInput) + Number(secondNumberInput);
		setResult(result);
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

				<h2>{result}</h2>
			</div>
		</div>
	);
}

export default App;
