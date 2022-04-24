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
    text: {
      primary: "#CCCCCC",
      secondary: "#555555",
    },
    background: {
      paper: "#040404", // This ends up being #101010, MUI paper has an overlay
      default: "#101010",
    },
  },
  shape: {
    borderRadius: "0.5rem",
  },
});
