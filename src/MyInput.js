export default function MyInput({ value, handleChange, inputName }) {
  return (
    <>
      <div>
        <div></div>
        <label>{inputName}</label>
        <input
          value={value}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}
