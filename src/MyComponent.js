import MyInput from "./MyInput";
export default function MyComponent({
  valueComponent,
  handleChangeComponent,
  inputName,
}) {
  return (
    <>
      <h1>This is the header of the component</h1>
      <MyInput
        inputName={inputName}
        handleChange={handleChangeComponent}
        value={valueComponent}
      />
      <h1>This is the footer of the component</h1>
    </>
  );
}
