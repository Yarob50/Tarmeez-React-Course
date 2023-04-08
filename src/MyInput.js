import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";

export default function MyInput() {
  const inputContext = useContext(LoanInputContext);
  const userData = useContext(UserContext);

  return (
    <>
      <div>
        <div></div>
        <label>
          {userData.name} {inputContext.labelTitle}
        </label>
        <input
          value={inputContext.value}
          onChange={(event) => {
            inputContext.handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}
