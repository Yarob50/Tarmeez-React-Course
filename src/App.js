import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  const [devices, setDevices] = useState([
    "iphone",
    "mac",
    "samsung",
    "windows",
  ]);
  const devicesList = devices.map((device) => {
    return <li>{device}</li>;
  });

  function handleAddClick() {
    // const newDevices = [...devices];
    // newDevices.push(deviceNameInputValue);
    // setDevices(newDevices);

    setDevices([...devices, deviceNameInputValue]);
  }

  return (
    <div className="App" style={{ marginTop: "100px", fontSize: "30px" }}>
      {devicesList}

      <div>
        <input
          value={deviceNameInputValue}
          onChange={(event) => {
            setDeviceNameInputValue(event.target.value);
          }}
          type="text"
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default App;
