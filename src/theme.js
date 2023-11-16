import React from 'react'
import App from "./App";
import { ThemeProvider} from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from "@mui/material/styles";
import { useTheme } from '@mui/system';

const getDesignTokens = (themeee ,mode) => ({
    palette: {
        background: {

        },
        mode,
        ...(mode === 'light'
            ? {
                // 👇 palette values for light mode
                primary: { main: "#FFFFFF" },
                text: {
                    primary: '#5D5656',
                    light: "#918889"
                },
                title: {
                    main: "#282525"
                },
                background: {
                    default: "#FFFFFF"
                },
                containerColor:{
                    main:"#ECECEC"
                }
            }
            : {
                // 👇 palette values for dark mode
                primary: { main: '#2F2223' },
                text: {
                    primary: '#C2BDBD',
                },
                title: {
                    main: "#F3F2F2"
                },
                background: {
                    default: '#251819'
                },
                containerColor:{
                    main:"#2F2223"
                }

            }),
        redColor: {
            main: "#DC3845",
            light: "#DB4D59",
            dark: "#D42B39"
        },
    },
    
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    typography: {
        "fontFamily": `'Playpen Sans', cursive;`,
        "fontSize": 15,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeigHard": 600,
        // poster: {
        //     fontSize: '4rem',
        //     color: 'red',
        //   },
        Maintitle:{
            fontSize:"40px",
            fontWeight:"600",
            [themeee.breakpoints.down('lg')]: {
                fontSize:"28px",
            },
        },
          
        title2:{
            fontSize:"24px",
            fontWeight:"600",
            // color:"title.main",
            [themeee.breakpoints.up('md')]: {
                
              },
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1024,
            xl: 1150,
        },
    },
    
});

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function Theme() {
    const themeee= useTheme();
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
               
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(getDesignTokens(themeee,mode)), [mode])



    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

