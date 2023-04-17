import logo from "./logo.svg";
import "./App.css";
import Material from "./Material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ marginTop: "200px", marginLeft: "500px" }}>
        <Material />
      </div>
    </ThemeProvider>
  );
}

export default App;
