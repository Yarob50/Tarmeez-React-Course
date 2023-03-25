import "./TagButtonStyle.css";
export default function TagButton({ tagName, children }) {
  return (
    <button className="tagButton">
      {tagName}
      {children}
    </button>
  );
}
