import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, Link } from "@mui/material";

import Modal from "../components/Modal";

export default function CheckboxLabels({ link, label, required, modal }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <>
            {label}
            {Modal && (
              <Modal
                label={modal.label}
                title={modal.title}
                substance={modal.substance}
              />
            )}

            {Link && (
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  alert(link?.href);
                }}
              >
                {link?.text}
              </Link>
            )}
          </>
        }
      />
    </FormGroup>
  );
}
