//Palette.js
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12.25, // 원하는 기본 폰트 크기로 변경합니다.
  },
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          color: "red",
        },
        color: "white", // if you also want to change the color of the input, this is the prop you'd use
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: true,
      },
    },
  },
  palette: {
    primary: {
      // This is green.A700 as hex.
      main: "#36ae37",
      contrastText: "#ffffff",
    },
    secondary: {
      // Purple and green play nicely together.
      main: "#A7C957",
      contrastText: "#ffffff",
    },
    warning: {
      // This is green.A700 as hex.
      main: "#BC4749",
      contrastText: "#ffffff",
    },
    etc: {
      main: "#6A994E",
    },
  },
});

export default function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
