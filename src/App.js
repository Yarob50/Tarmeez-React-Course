import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let nextId = 5;
function App() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "mac" },
    { id: 3, name: "samsung" },
    { id: 4, name: "windows" },
  ]);
  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            handleDeleteClick(device.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleEditClick(device.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });

  function handleDeleteClick(id) {
    // const newDevices = [...devices];

    // let index = 0;
    // let selectedIndex = 0;

    // for (let device of newDevices) {
    //   if (device.id == id) {
    //     selectedIndex = index;
    //   }
    //   index++;
    // }

    // newDevices.splice(selectedIndex, 1);

    const newDevices = devices.filter((device) => {
      return device.id !== id;
    });
    setDevices(newDevices);
  }

  function handleEditClick(id) {
    const newDevices = devices.map((device) => {
      if (device.id == id) {
        let newDevice = { ...device, name: device.name + "0" };
        return newDevice;
      } else {
        return device;
      }
    });

    setDevices(newDevices);
  }

  function handleAddClick() {
    // const newDevices = [...devices];
    // newDevices.push(deviceNameInputValue);
    // setDevices(newDevices);

    setDevices([...devices, { id: nextId, name: deviceNameInputValue }]);
    nextId = nextId + 1;
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
