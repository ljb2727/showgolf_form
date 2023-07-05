import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

export default function FixedBottomNavigation() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "600px",
        },
        marginLeft: {
          sm: "50%",
        },
        transform: {
          xs: "translateX(0)",
          sm: "translateX(-50%)",
        },
      }}
      elevation={0}
    >
      <Grid
        container
        component="footer"
        spacing={1}
        sx={{
          background: "#f8f8fa",
          m: 0,
          width: "100%",
          height: "var(--footer-height)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
        justifyContent="center"
      >
        <Grid
          item
          sx={{
            backgroundImage:
              "url(https://image.xgolf.com/file/2023/0626/202306265236912ljb2727.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "20px",
            width: "100%",
          }}
        />
        <Grid item>
          <Typography>
            Copyright 2021. Showgolf. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
