import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#191b1f",
        height: "100vh",
        direction: "rtl",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
