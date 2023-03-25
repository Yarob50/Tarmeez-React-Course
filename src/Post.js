export default function Post({ title, body, count }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        background: "white",
        margin: "25px",
      }}
    >
      <h1>{count}</h1>
      <h2>{title}</h2>
      <hr />
      <p>{body}</p>
    </div>
  );
}
