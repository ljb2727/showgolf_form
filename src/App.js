import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Flight from "./pages/flight";
import Theme from "./Theme";
import { Box } from "@mui/material";

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import StickyFooter from "./containers/StickyFooter";

import Test from "./components/Test";

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Box
        sx={{
          overflow: "hidden",
          mx: "auto",
          maxWidth: "600px",
          minHeight: "calc(100vh - var(--footer-height))",
          border: {
            sm: "1px solid #e8e8e8",
          },
          borderWidth: "0 1px",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Box>
      <StickyFooter />
    </Theme>
  );
}

export default App;
