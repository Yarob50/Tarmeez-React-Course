import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{ userName: "yarhmm", email: "yarob@gmail.com", name: "Yarob" }}
    >
      <div className="App" style={{ marginTop: "250px" }}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
