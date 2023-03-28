import { useState } from "react";

export default function MyButton() {
  const [name, setValue] = useState("Ahmad");

  function buttonClicked() {
    if (name == "Ahmad") {
      setValue("Yarob");
    } else {
      setValue("Ahmad");
    }
  }

  console.log(name);
  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
}
