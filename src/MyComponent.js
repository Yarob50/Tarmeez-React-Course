export default function MyComponent({ value, handleChange, currentInputs }) {
  return (
    <>
      <label>Phone Number:</label>
      <input
        value={value}
        onChange={(event) => {
          handleChange({ ...currentInputs, phoneNumber: event.target.value });
        }}
      />
    </>
  );
}
