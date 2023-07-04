import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Flight from "./pages/flight";
import Theme from "./Theme";
import { Box } from "@mui/material";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Box
        sx={{
          overflow: "hidden",
          mx: "auto",

          minHeight: "100vh",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/flight" element={<Flight />} />
        </Routes>
        <Footer />
      </Box>
    </Theme>
  );
}

export default App;
