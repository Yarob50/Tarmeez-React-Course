import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <h1>Hello World</h1>
      <h2> Welcome To React Router </h2>

      <Link to="/home">
        <div
          style={{
            background: "orange",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <h1>Go To Home Page</h1>
        </div>
      </Link>
    </>
  );
}
