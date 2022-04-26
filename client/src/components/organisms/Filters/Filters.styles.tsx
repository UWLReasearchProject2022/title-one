import { styled } from "@mui/system";
import { Card, FormControlLabel, Typography, Divider } from "@mui/material";

export const Container = styled(Card)({
  width: "30%",
  maxWidth: "20rem",
  height: "70em",
  marginTop: "0.5em",
  marginRight: "0.5em",
  backgroundColor: "#101010",
  backgroundImage: "none",
  padding: "1.5rem",
});

export const TopBar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Title = styled(Typography)({
  fontSize: "1.25rem",
});

export const StyledDivider = styled(Divider)({
  margin: "0.75rem -0.75rem",
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
