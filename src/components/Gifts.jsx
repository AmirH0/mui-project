import styled from "@emotion/styled";
import { Box, Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";
import Card from "@mui/material/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import gift1 from "../assets/gift1 2.png"

export default function Gifts() {
  const Mycard = styled(Card)({}, (props) => ({
    backgroundColor: "redColor.main",
  }));

  return (
    <Container >
      <Box >
        <Grid container rowSpacing={3} columnSpacing={{  }} sx={{
          //  bgcolor:"red",
            width:{md:"80%", sm:"75%", xs:"100%"},
            mx:"auto"
        }}>
          <Grid item xs={6} md={4} padding=".5rem">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                position: "relative",
                width:{md:"200px" ,xs:"200px"},
                bgcolor:"containerColor.main",
                padding:"30px 0px",
                borderRadius: "12px",
                mx:"auto"
              }}
            >
              <IconButton
                sx={{ position: "absolute", right: "5px", top: "5px" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Box width="120px">
                <img src={gift1} alt="" width="100%"/>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px" }}>$15</Typography>
                <Typography sx={{ fontSize: "13px" }}>Gingerbread</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} padding=".5rem">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                position: "relative",
                width:{md:"200px" ,xs:"200px"},
                bgcolor:"containerColor.main",
                padding:"30px 0px",
                borderRadius: "12px",
                mx:"auto"
              }}
            >
              <IconButton
                sx={{ position: "absolute", right: "5px", top: "5px" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Box width="120px">
                <img src={gift1} alt="" width="100%"/>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px" }}>$15</Typography>
                <Typography sx={{ fontSize: "13px" }}>Gingerbread</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} padding=".5rem">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                position: "relative",
                width:{md:"200px" ,xs:"200px"},
                bgcolor:"containerColor.main",
                padding:"30px 0px",
                borderRadius: "12px",
                mx:"auto"
              }}
            >
              <IconButton
                sx={{ position: "absolute", right: "5px", top: "5px" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Box width="120px">
                <img src={gift1} alt="" width="100%"/>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px" }}>$15</Typography>
                <Typography sx={{ fontSize: "13px" }}>Gingerbread</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} padding=".5rem">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                position: "relative",
                width:{md:"200px" ,xs:"200px"},
                bgcolor:"containerColor.main",
                padding:"30px 0px",
                borderRadius: "12px",
                mx:"auto"
              }}
            >
              <IconButton
                sx={{ position: "absolute", right: "5px", top: "5px" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Box width="120px">
                <img src={gift1} alt="" width="100%"/>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px" }}>$15</Typography>
                <Typography sx={{ fontSize: "13px" }}>Gingerbread</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} padding=".5rem">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                position: "relative",
                width:{md:"200px" ,xs:"200px"},
                bgcolor:"containerColor.main",
                padding:"30px 0px",
                borderRadius: "12px",
                mx:"auto"
              }}
            >
              <IconButton
                sx={{ position: "absolute", right: "5px", top: "5px" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Box width="120px">
                <img src={gift1} alt="" width="100%"/>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px" }}>$15</Typography>
                <Typography sx={{ fontSize: "13px" }}>Gingerbread</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
       
      </Box>
    </Container>
  );
}
