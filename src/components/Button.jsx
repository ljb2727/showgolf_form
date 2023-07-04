import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const CustomButton = styled(Button)(({ theme }) => ({
  padding: "0.5em",
  fontSize: "medium",
}));

export default function DefaultButton({ variant = "outlined", children }) {
  return (
    <CustomButton
      type="submit"
      variant={variant}
      fullWidth
      sx={{ maxWidth: 200 }}
    >
      {children}
    </CustomButton>
  );
}
