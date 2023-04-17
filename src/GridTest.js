import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GridTest() {
  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={2} style={{ background: "blue" }}>
        <Item>xs=4</Item>
      </Grid>

      <Grid xs={2} style={{ background: "blue" }}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
}
