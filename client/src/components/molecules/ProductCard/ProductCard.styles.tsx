import { styled } from "@mui/system";
import { Card, Typography } from "@mui/material";

export const Container = styled(Card)({
  width: "50%",
  padding: "1rem",
  margin: "0.5rem",
  color: "#CCCCCC",
});

export const Title = styled(Typography)({
  fontSize: "1rem",
});

export const Header = styled("div")({
  display: "flex",
});

export const Price = styled(Typography)({
  fontSize: "1rem",
  marginLeft: "auto",
  marginRight: "0.5rem",
});

export const Developer = styled(Typography)({
  fontSize: "0.7rem",
});

export const Body = styled("div")({
  display: "flex",
  marginTop: "0.3rem",
});

export const Image = styled("img")({
  height: "14rem",
});

export const Description = styled(Typography)({
  fontSize: "0.9rem",
  width: "12rem",
  marginLeft: "1rem",
});
