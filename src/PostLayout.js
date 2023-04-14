import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <div style={{ width: "100%", background: "green" }}>
        <h1>Post</h1>
      </div>

      <div>
        <Outlet />
      </div>

      <div style={{ width: "100%", background: "green" }}>
        <h1>Post</h1>
      </div>
    </>
  );
}
