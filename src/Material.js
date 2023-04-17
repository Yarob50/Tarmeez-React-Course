import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function Material() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => {
          alert("clicked");
        }}
        color="primary"
      >
        Secondary
      </Button>
      <Button variant="outlined" color="success" size="large">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>

    // <Stack direction="row" spacing={2}>
    //   <Avatar>H</Avatar>
    //   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    //   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    // </Stack>
  );
}
