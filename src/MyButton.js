import { useState } from "react";
let name = "Ahmad";

export default function MyButton() {
  console.log("render");
  const [name, setName] = useState("Ahmad");

  function buttonClicked() {
    if (name == "Yarob") {
      setName("Ahmad");
    } else {
      setName("Yarob");
    }
  }

  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
}
