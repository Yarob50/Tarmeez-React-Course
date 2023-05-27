export default function resultReducer(currentResultState, action) {
	console.log("calling the reducer", currentResultState, action);

	const type = action.type;

	if (type == "added") {
		const { firstNumber, secondNumber } = action.payload;
		return Number(firstNumber) + Number(secondNumber);
	} else if (type == "subtracted") {
		const { firstNumber, secondNumber } = action.payload;
		return firstNumber - secondNumber;
	} else if (type == "multiplied") {
		const { firstNumber, secondNumber } = action.payload;
		return firstNumber * secondNumber;
	} else if (type == "divided") {
		const { firstNumber, secondNumber } = action.payload;
		return firstNumber / secondNumber;
	}
}
