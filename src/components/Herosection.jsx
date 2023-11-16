import React from "react";
import heroPic from "../assets/home.png";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

export default function Herosection() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Box
          // component="img"
          sx={{
            flex: "1.25",
            // maxWidth:"500px"
            maxWidth: "200%",
          }}
          // alt="The house from the offer."
          // src={heroPic}
        >
          <img src={heroPic} alt="" srcset="" style={{ maxWidth: "100%" }} />
        </Box>
        <Box
          sx={{
            flex: "1",
            textAlign:{xs:"center" , sm:"start"},
            
          }}
        >
          <Typography
          variant="Maintitle"
            // sx={{ typography: { lg: "h3", md: "h4" , sm:"h5" } }}
            color="title.main"
            // fontWeight={600}
          >
            Merry Christmas and <br /> Happy New Year!
          </Typography>
          <Typography  variant="subtitle1" fontWeight="" marginTop="16px" padding={{xs:"0px 2rem" ,sm:"0px"}}>
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </Typography>
          <Button
            variant="contained"
            disableRipple
            sx={{
              bgcolor: "redColor.main",
              "&:hover": {
                backgroundColor: "redColor.light",
              },
              marginTop: "64px",
              fontSize: "13px",
              padding: "20px 60px",
              borderRadius: "50px",
              fontWeight:"600"
            }}
          >
            Get Start
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
