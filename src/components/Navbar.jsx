import { Box, Container, useTheme } from "@mui/system";
import React, { useContext, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext } from "../theme";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { useTheme } from "@emotion/react";
import logoimg from "../assets/1.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
// import useMediaQuery from "@mui/material/useMediaQuery";

const navItems = ["Home", "Celeberate", "Gift", "New"];

export default function Navbar() {
  const theme = useTheme();
  // const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const colorMode = useContext(ColorModeContext);
  const [value, setValue] = useState(0);

  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ top: open });
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <React.Fragment>
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer(false)}
          sx={{bgcolor:"transparent"}}
                  
        >
          <Box sx={{
            backgroundColor: "containerColor.main",
            width: "auto",
            paddingY:"3rem",
            borderRadius:"0px 0px 1rem 1rem",
            position:"relative"
          }}
            // sx={{
            //   width: "auto",
            // }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {navItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ position:"absolute" , right:"5px" , top:"5px"}}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Drawer>
      </React.Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "26px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                // justifyContent:"center",
                gap: "8px",
                padding: "2px",
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

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <BottomNavigation
                sx={{
                  bgcolor: "transparent",
                  "& .Mui-selected, .Mui-selected > svg": {
                    color: "redColor.main",
                    textShadow: "0px 0px 8px #DC3845",
                  },
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
                <IconButton
                  sx={{
                    ml: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness2Icon />
                  )}
                </IconButton>
              </BottomNavigation>
            </Box>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
