import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";

function App() {
  return (
    <div className="App">
      {/* ROUTES */}
      <div style={{ fontSize: "30px" }}>
        <Link to="/home">
          <button style={{ fontSize: "30px" }}>Home</button>
        </Link>

        <Link to="/hello">
          <button style={{ fontSize: "30px" }}>Hello</button>
        </Link>

        <Link to="/posts">
          <button style={{ fontSize: "30px" }}>Posts</button>
        </Link>
      </div>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
