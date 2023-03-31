import { useState } from "react";

export default function MyForm() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
  });

  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInputs, isStudent: event.target.checked });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />

      <hr></hr>

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          //   const newFormInput = { ...formInputs };
          //   newFormInput.email = event.target.value;
          //   setFormInput(newFormInput);

          setFormInput({ ...formInputs, email: event.target.value });
        }}
      />

      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(event) => {
          setFormInput({ ...formInputs, age: event.target.value });
        }}
      />

      <hr></hr>

      <label>Are you student</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleCheckBoxChanged}
      />

      <hr></hr>
      <label>General Info</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInput({ ...formInputs, generalInfo: event.target.value });
        }}
      />

      <button>Submit</button>
    </form>
  );
}
