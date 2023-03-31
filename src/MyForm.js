import { useState } from "react";

export default function MyForm() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInput] = useState({ name: "", email: "" });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInput({ name: event.target.value });
        }}
      />

      <hr></hr>

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          setFormInput({ email: event.target.value });
        }}
      />

      <hr></hr>

      <button>Submit</button>
    </form>
  );
}
