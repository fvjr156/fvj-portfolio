import React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const MyThemes = {
  light: responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: "Inter, Arial, sans-serif",
        h1: { fontFamily: "Gabarito, serif", fontSize: "3.5rem" },
        h2: { fontFamily: "Gabarito, serif", fontSize: "3rem" },
        h3: { fontFamily: "Gabarito, serif", fontSize: "2.5rem" },
        h4: { fontFamily: "Gabarito, serif", fontSize: "2rem" },
        h5: { fontFamily: "Gabarito, serif", fontSize: "1.75rem" },
        h6: { fontFamily: "Gabarito, serif", fontSize: "1.3rem" },
        subtitle1: { fontFamily: "Inter, Arial, sans-serif" },
        subtitle2: { fontFamily: "Inter, Arial, sans-serif" },
        body1: { fontFamily: "Inter, Arial, sans-serif", fontSize: "1rem" },
        body2: { fontFamily: "Inter, Arial, sans-serif", fontSize: "0.875rem" },
        button: { fontFamily: "Inter, Arial, sans-serif" },
        caption: { fontFamily: "Inter, Arial, sans-serif" },
        overline: { fontFamily: "Inter, Arial, sans-serif" },
      },
      palette: {
        primary: { main: "#e0dab5" },
        background: { default: "#e8e3c2" },
        text: { primary: "#1f2e37", primaryNegative: "#e0e0e0" },
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            button: {
              textTransform: 'none',
              cursor: 'pointer',
            },
            root: {
              color: '#1F1F1F',
            }
          }
        }
      }
    })
  ),
  dark: responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: "Inter, Arial, sans-serif",
        h1: { fontFamily: "Gabarito, serif", fontSize: "3.5rem" },
        h2: { fontFamily: "Gabarito, serif", fontSize: "3rem" },
        h3: { fontFamily: "Gabarito, serif", fontSize: "2.5rem" },
        h4: { fontFamily: "Gabarito, serif", fontSize: "2rem" },
        h5: { fontFamily: "Gabarito, serif", fontSize: "1.75rem" },
        h6: { fontFamily: "Gabarito, serif", fontSize: "1.3rem" },
        subtitle1: { fontFamily: "Inter, Arial, sans-serif" },
        subtitle2: { fontFamily: "Inter, Arial, sans-serif" },
        body1: { fontFamily: "Inter, Arial, sans-serif", fontSize: "1rem" },
        body2: { fontFamily: "Inter, Arial, sans-serif", fontSize: "0.875rem" },
        button: { fontFamily: "Gabarito, Arial, sans-serif" },
        caption: { fontFamily: "Inter, Arial, sans-serif" },
        overline: { fontFamily: "Inter, Arial, sans-serif" },
      },
      palette: {
        primary: { main: "#5e0807" },
        background: { default: "#4c0403" },
        text: { primary: "#e0e0e0", primaryNegative: "#1f2e37" },
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            button: {
              textTransform: 'none',
              cursor: 'pointer',
            },
            root: {
              color: '#FFFFFF',
            }
          }
        }
      }
    })
  ),
};
