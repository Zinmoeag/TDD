import { createTheme } from "@mui/material";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff0000",
        },
        secondary: {
          main: "#00ff00",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#YYYYYYY",
        },
        secondary: {
          main: "#ffffff",
        },
      },
    },
  },
});
