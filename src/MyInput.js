import { useState } from "react";

export default function MyInput() {
  const [myInputValue, setMyInputValue] = useState("");
  function handleInputChange(event) {
    setMyInputValue(event.target.value);
  }
  return (
    <div>
      <label>Your Name:</label>
      <input value={myInputValue} onChange={handleInputChange} />
    </div>
  );
}
