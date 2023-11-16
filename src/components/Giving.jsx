import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import givinOne from "../assets/giving1.png";
import givinTwo from "../assets/giving2.png";
import givinThree from "../assets/giving3 1.png";
import Grid from "@mui/system/Unstable_Grid/Grid";

export default function Giving() {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "128px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   justifyContent:"center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
        // sx={{
        //   typography: { md: "24px" },
        //   fontWeight: "600",
        //   marginBottom: "56px",
        // }}
        >
          <Typography variant="title2">
            Start Giving This <br /> Christmas
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 8, md: 15 }}
          // justifyContent="center"
          alignItems="cnter"
        >
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "136px",
                marginX: "auto",
              }}
            >
              <img src={givinOne} alt="" style={{ width: "100%" }} />

              <Typography sx={{ fontWeight: "600" }}>Surprise gifts</Typography>
              <Typography sx={{ fontSize: "14px" }}>
                They are the best gifts there is.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "136px",
                marginX: "auto",
              }}
            >
              <img src={givinTwo} alt="" style={{ width: "100%" }} />

              <Typography sx={{ fontWeight: "600" }}>Surprise gifts</Typography>
              <Typography sx={{ fontSize: "14px" }}>
                They are the best gifts there is.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "136px",
                marginX: "auto",
              }}
            >
              <img src={givinThree} alt="" style={{ width: "100%" }} />

              <Typography sx={{ fontWeight: "600" }}>Surprise gifts</Typography>
              <Typography sx={{ fontSize: "14px" }}>
                They are the best gifts there is.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
{
  /* <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "440px",
            }}
          >
            <img src={givinOne} alt="" style={{ width: "100%" }} />

            <Typography>Surprise gifts</Typography>
            <Typography>They are the best gifts there is.</Typography>
          </Box>
        </Box> */
}
