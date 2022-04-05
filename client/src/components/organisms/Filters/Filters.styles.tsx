import { styled } from "@mui/system";
import { Button, Card, FormControlLabel, Typography } from "@mui/material";

export const Container = styled(Card)({
  width: "30%",
  maxWidth: "20rem",
  height: "70em",
  marginTop: "0.5em",
  marginRight: "0.5em",
  backgroundColor: "#101010",
  backgroundImage: "none",
  padding: "1.5em",
});

export const TopBar = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Title = styled(Typography)({
  fontSize: "1.25em",
});

export const Apply = styled(Button)({
  textTransform: "capitalize",
  fontSize: "1em",
  fontWeight: "normal",
  height: "1.7em",
  marginLeft: "1em",
});

export const Divider = styled("hr")({
  width: "calc(100% + 3em)",
  border: "1px solid #222222",
  margin: "1.5em -1.5em",
});

export const Separator = styled("span")({
  margin: "0 1rem",
});

export const PriceWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
});

export const FormControl = styled(FormControlLabel)({
  textTransform: "capitalize",
  width: "100%",
});
