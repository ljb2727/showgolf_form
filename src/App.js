import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Flight from "./pages/flight";
import Theme from "./Theme";
import { Box } from "@mui/material";

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Box sx={{ overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/flight" element={<Flight />} />
        </Routes>
      </Box>
    </Theme>
  );
}

export default App;
