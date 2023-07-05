import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  const pathName = window.location.pathname.substring(1);

  const [title, setTitle] = React.useState("문의 등록");

  React.useEffect(() => {
    switch (pathName) {
      case "flight":
        setTitle("정품 등록");
        break;

      default:
        break;
    }
  }, []);

  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
