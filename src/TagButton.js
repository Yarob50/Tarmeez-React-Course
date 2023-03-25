import "./TagButtonStyle.css";
export default function TagButton({ title, children }) {
  return (
    <button className="tagButton">
      {title}
      {children}
    </button>
  );
}
