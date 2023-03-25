export default function Post({ postName = "no title", postBody = "no body" }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        background: "white",
        margin: "25px",
      }}
    >
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
    </div>
  );
}
