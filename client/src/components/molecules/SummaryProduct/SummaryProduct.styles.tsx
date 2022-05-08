import { styled } from "@mui/system";
import { Divider, Typography } from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export const DividerStyled = styled(Divider)({
  width: "100%",
  margin: "1rem 0",
});

export const Name = styled(Typography)({
  fontSize: "1rem",
  marginRight: "1rem",
});

export const Quantity = styled(Typography)({
  fontSize: "1rem",
  marginRight: "1rem",
  color: "#999",
});

export const Price = styled(Typography)({
  fontSize: "1rem",
  marginLeft: "auto",
});
