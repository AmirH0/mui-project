import { Box, Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React, { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import givinOne from "../assets/gift4.png";
import givinTwo from "../assets/gift4 1.png";
import givinThree from "../assets/gift2 1.png";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

register();

export default function Newgift() {
  const matches = useMediaQuery("(min-width:610px)");
  return (
    <Box mt="80px">
      <Container sx={{ width: "100%" , }}>
        <Typography  textAlign="center" mb="64px">
          New Gifts
        </Typography>

        <Grid
          // bgcolor="blue"
          container
          rowSpacing={3}
          // display="n"
          columnSpacing={{ xs: 1, sm: 0, md: 1 }}
          justifyContent={{ md: "center", xs: "space-between" }}
          alignItems="cnter"
          width="100%"
          sx={{
            display: matches ? "" : "none",
          }}
        >
          <Grid item xs={6} sm={4} md={4} px=".5rem">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: { md: "230px", xs: "100%" },
                // width: ,
                marginX: "auto",
                backgroundColor: "containerColor.main",
                // padding: "21px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "redColor.main",
                  borderRadius: "12px 12px 50% 50%",
                }}
              >
                <img
                  src={givinOne}
                  alt=""
                  style={{ width: "60%", marginBottom: "2rem" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 0px",
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>$20</Typography>
                <Typography sx={{ fontSize: "14px" }}>Snow globe</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4} px=".5rem" >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                // width: { md: "230px", xs: "220px" },
                width: { md: "230px", xs: "100%" },

                marginX: "auto",
                backgroundColor: "containerColor.main",
                // padding: "21px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "redColor.main",
                  borderRadius: "12px 12px 50% 50%",
                }}
              >
                <img
                  src={givinTwo}
                  alt=""
                  style={{ width: "60%", marginBottom: "2rem" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 0px",
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>$20</Typography>
                <Typography sx={{ fontSize: "14px" }}>Snow globe</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4} px=".5rem" >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                // width: { md: "230px", xs: "220px" },
                width: { md: "230px", xs: "100%" },

                marginX: "auto",
                backgroundColor: "containerColor.main",
                // padding: "21px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "redColor.main",
                  borderRadius: "12px 12px 50% 50%",
                }}
              >
                <img
                  src={givinThree}
                  alt=""
                  style={{ width: "60%", marginBottom: "2rem" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 0px",
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>$20</Typography>
                <Typography sx={{ fontSize: "14px" }}>Snow globe</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ display: matches ? "none" : "block" }}>
        <Swiper
          autoHeight={true}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={2}
          loop={true}
          // grabCursor={true}
          pagination={{
            clickable: true,
          }}
          avigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "230px",
                marginX: "auto",
                backgroundColor: "containerColor.main",
                // padding: "21px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "redColor.main",
                  borderRadius: "12px 12px 50% 50%",
                }}
              >
                <img
                  src={givinOne}
                  alt=""
                  style={{ width: "60%", marginBottom: "2rem" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  padding: "20px 0px",
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>$20</Typography>
                <Typography sx={{ fontSize: "14px" }}>Snow globe</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "230px",

                marginX: "auto",
                backgroundColor: "containerColor.main",
                // padding: "21px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "redColor.main",
                  borderRadius: "12px 12px 50% 50%",
                }}
              >
                <img
                  src={givinOne}
                  alt=""
                  style={{ width: "60%", marginBottom: "2rem" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 0px",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>$20</Typography>
                <Typography sx={{ fontSize: "14px" }}>Snow globe</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "230px",

                marginX: "auto",
                backgroundColor: "containerColor.main",
                // padding: "21px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "redColor.main",
                  borderRadius: "12px 12px 50% 50%",
                }}
              >
                <img
                  src={givinOne}
                  alt=""
                  style={{ width: "60%", marginBottom: "2rem" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  padding: "20px 0px",
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>$20</Typography>
                <Typography sx={{ fontSize: "14px" }}>Snow globe</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
