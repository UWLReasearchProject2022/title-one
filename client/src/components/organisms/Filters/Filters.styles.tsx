import { styled } from "@mui/system";
import { Card, FormControlLabel, Typography, Divider } from "@mui/material";

export const Container = styled(Card)({
  width: "22rem",
  marginTop: "0.5rem",
  backgroundColor: "#101010",
  backgroundImage: "none",
});

export const TopBar = styled("div")({
  padding: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Body = styled("div")({
  padding: "1.5rem",
  paddingTop: "0rem",
});

export const Title = styled(Typography)({
  fontSize: "18px",
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
