import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            문의 등록
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
