import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function SimpleAccordion() {
  const [checked, setChecked] = React.useState(true);

  return (
    <Container maxWidth="md" style={{ marginTop: "200px" }}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Switch
              {...label}
              value={checked}
              onChange={() => {
                setChecked((prev) => !prev);
              }}
              defaultChecked
            />
          </AccordionDetails>
        </Accordion>
      </div>

      <Collapse in={checked} collapsedSize={100}>
        <div style={{ height: "400px", background: "orange" }}>
          <h1>Hello World</h1>
        </div>
      </Collapse>
    </Container>
  );
}
