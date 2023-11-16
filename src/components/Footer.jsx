import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import logoimg from "../assets/1.png";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <Container maxWidth="xl" >
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap:{md:"0px" , xs:"1rem"},
          justifyContent: "space-between",
          alignItems: {md:"start" ,xs:"start"},
          mt:"144px"
        }}
      >
        <Box width="156px">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              // justifyContent:"center",
              gap: "8px",
              padding: "2px",
              marginBottom:"1rem"
            }}
          >
            <Box
              component="img"
              sx={{
                // height: "auto",
                width: "26px",
              }}
              alt="The house from the offer."
              src={logoimg}
            />
            Christmas
          </Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            This Christmas give a lot of love
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap:"11px"
          }}
        >
          <Typography marginBottom="1rem" color="title.main" fontWeight="600">Our Services</Typography>
            <Typography>Pricing</Typography>
            <Typography>Discounts</Typography>
            <Typography>Shipping mode</Typography> 
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap:"11px"
          }}
        >
          <Typography marginBottom="1rem" color="title.main" fontWeight="600">Our Services</Typography>
            <Typography>Pricing</Typography>
            <Typography>Discounts</Typography>
            <Typography>Shipping mode</Typography> 
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap:"11px"
          }}
        >
          <Typography marginBottom="1rem" color="title.main" fontWeight="600">Our Services</Typography>
            <Typography>Pricing</Typography>
            <Typography>Discounts</Typography>
            <Typography>Shipping mode</Typography> 
        </Box>
      </Box>

      <Box  sx={{
        display:"flex",
        margin:"112px 0px 40px 0px",
        justifyContent:"center",
        gap:".5rem"
      }}>
        <CopyrightIcon/>
        <Typography  >Bedimcode. All rigths reserved</Typography>
      </Box>
    </Container>
  );
}
