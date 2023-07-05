import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

export default function FixedBottomNavigation() {
  const [fixed, setFixed] = React.useState(false);

  React.useEffect(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    // console.log(`window:${windowHeight} / document:${documentHeight}`);
    if (windowHeight >= documentHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  return (
    <Box sx={{ pb: fixed && 10 }}>
      <Box
        sx={{
          //position: "fixed",
          position: fixed && "fixed",

          bottom: 0,
          left: {
            xs: 0,
            sm: "50%",
          },
          right: {
            xs: 0,
            sm: "auto",
          },
          width: {
            xs: "100%",
            sm: "600px",
          },
          transform: {
            xs: "translateX(0)",
            sm: "translateX(-50%)",
          },

          border: {
            sm: "1px solid #e8e8e8",
          },
          borderBottom: "none",
        }}
        elevation={0}
      >
        <Grid
          container
          component="footer"
          spacing={1}
          sx={{ background: "#f8f8fa", py: 2, m: 0, width: "100%" }}
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
    </Box>
  );
}
