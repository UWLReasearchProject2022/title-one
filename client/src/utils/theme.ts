import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#CCCCCC",
    },
    secondary: {
      main: "#555555",
      contrastText: "#CCCCCC",
    },
  },
});
