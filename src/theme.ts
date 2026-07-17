import { createTheme } from "@mui/material";

export const getTheme = (dark: boolean) =>
  createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: "#d0bcff",
      },
      secondary: {
        main: "#ffb4ab",
      },
    },
    shape: {
      borderRadius: 30,
    },
  });
