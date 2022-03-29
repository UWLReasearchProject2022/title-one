import { styled } from "@mui/system";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";

export const Banner = styled("div")({
  width: "100vw",
  backgroundColor: "#101010",
  position: "relative",
  left: "calc(-50vw + 50%)",
  marginBottom: "1rem",
  padding: "0.75em 0",
});

export const Container = styled("div")({
  width: "75vw",
  maxWidth: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BackIcon = styled(KeyboardBackspaceIcon)({
  marginRight: "0.5rem",
});

export const SearchField = styled(TextField)({
  width: "20em",
});