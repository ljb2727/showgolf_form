import * as React from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const CustomTextField = styled(TextField)`
  input {
    color: #000000;
    ::placeholder {
      color: #808080;
      opacity: 1;
    }
  }
  textarea {
    color: #000000;
    ::placeholder {
      color: #808080;
      opacity: 1;
    }
  }
`;

export default function BasicTextFields({
  id,
  placeholder,
  multiline,
  required,
}) {
  return (
    <>
      <CustomTextField
        id={id}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
        required={required}
        multiline={multiline}
        rows={multiline && 4}
      />
    </>
  );
}
