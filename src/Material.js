import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Material() {
  return (
    <Container maxWidth="xs">
      <Stack direction="row" spacing={2} style={{ background: "gray" }}>
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
          color="primary"
        >
          primary
        </Button>
        <Button variant="outlined" color="success" size="large">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>

        <Checkbox {...label} />

        <Slider aria-label="Volume" />

        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
        </Stack>
      </Stack>
      {/* //{" "}
      <Stack direction="row" spacing={2}>
        // <Avatar>H</Avatar>
        // <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        // <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        //{" "}
      </Stack> */}
    </Container>
  );
}
