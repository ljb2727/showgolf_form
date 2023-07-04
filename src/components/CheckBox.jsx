import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, Link } from "@mui/material";

export default function CheckboxLabels({ link, label, required }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <>
            {label}
            <Link
              onClick={(e) => {
                e.preventDefault();
                alert("link clicked!");
              }}
            >
              {link.text}
            </Link>
          </>
        }
      />
    </FormGroup>
  );
}
