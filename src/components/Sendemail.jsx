import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import letter from "../assets/letter 1.png";

export default function Sendemail() {
  return (
    <Container maxWidth="xl">
      <Box
        mt="200px"
        sx={{
          width: "100%",
          bgcolor: "redColor.main",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { md: "center", xs: "normal", sm: "center" },
          borderRadius: "32px",
          padding: { md: "50px 150px", xs: "40px 20px" },
        }}
      >
        <Box
          // bgcolor="red"
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            padding: { md: "0px", xs: "0px 20px" },
            // justifyContent:"start"
            alignItems: { md: "start", xs: "center" },
            textAlign: { md: "start", xs: "center" },
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "title.main",
              mb:"24px"
            }}
          >
            Send Good <br />
            Wishes!
          </Typography>
          <input type="text"  />
          <Button
            variant="contained"
            disableRipple
            sx={{
              // bgcolor: "redColor.main",
              // "&:hover": {
              //   backgroundColor: "redColor.light",
              // },
              bgcolor: "#282525",
              // marginTop: "64px",
              fontSize: "13px",
              padding: "16px 32px",
              borderRadius: "50px",
              fontWeight: "600",
              width: { md: "auto", xs: "100%" },
              mt:"12px"
            }}
          >
            Send Message
          </Button>
        </Box>
        <Box
          sx={{
            flex: "1.20",
            textAlign: "center",
            transform: "rotate(15deg)",
            mt: { md: "0px", xs: "4rem" },
            px: { md: "0px", xs: "40px",sm:"100px" },
          }}
        >
          <img src={letter} alt="" width="100%" />
        </Box>
      </Box>
    </Container>
  );
}
