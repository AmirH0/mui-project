import { Box, Container } from "@mui/system";
import React from "react";
import cleberatePic from "../assets/celebrate 1.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Celebrat() {
  return (
    <Container maxWidth="xl" sx={{mt:"80px"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row" , xs:"column" },
          textAlign:{xs:"center" , md:"start"},
          justifyContent: "center",
          alignItems:"center",
          gap: "2rem",
        }}
      >
        <Box sx={{ flex: "1" }}>
          <Typography variant="title2" 
          //  sx={{ fontWeight: "600", fontSize: { md: "24px" } , mb:"2rem" }}
           >
            Celebrate With A <br /> Lot Of Love
          </Typography>
          <Typography mt="1.5rem">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones , friends and neighbors, wishing them a
            good Christmas message.
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
              padding: "20px 50px",
              borderRadius: "50px",
              fontWeight: "600",
            }}
          >
            Send Good Wishes
          </Button>
        </Box>
        <Box sx={{ flex: "1.25" }}>
          <img src={cleberatePic} alt="" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Container>
  );
}
