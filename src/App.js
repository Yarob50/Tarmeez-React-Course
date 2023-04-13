import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";

function App() {
  let postsData = [
    {
      id: 1,
      title: "Hello World",
      body: "sdjfldjs dslfjdslf dsjfldsjflewrewr",
    },
    {
      id: 2,
      title: "Second Post",
      body: "sdjfldjs dslfjdslf dsjfldsjflewrewr",
    },
    {
      id: 3,
      title: "Third Post",
      body: "sdjfldjs dslfjdslf dsjfldsjflewrewr",
    },
  ];

  return (
    <postsContext.Provider value={postsData}>
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
          <Route path="/postDetails/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
