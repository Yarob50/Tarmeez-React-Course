import { createContext } from "react";

export let LoanInputContext = createContext({
  labelTitle: "",
  handleChange: null,
  inputValue: null,
});
