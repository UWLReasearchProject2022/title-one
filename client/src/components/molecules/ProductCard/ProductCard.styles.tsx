import { styled } from "@mui/system";
import { Card, Typography } from "@mui/material";

export const Container = styled(Card)({
  width: "50%",
  padding: "1rem",
  margin: "0.5rem",
  color: "#CCCCCC",
  backgroundColor: "#101010",
  backgroundImage: "none",
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
});

export const Developer = styled(Typography)({
  fontSize: "0.7rem",
});

export const Body = styled("div")({
  display: "flex",
  marginTop: "0.3rem",
});

export const Image = styled("img")({
  width: "40%",
});

export const Details = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export const Description = styled(Typography)({
  fontSize: "0.9rem",
  width: "60%",
  margin: "0rem 1rem",
});

export const IconStack = styled("div")({
  width: "2rem",
  marginLeft: "auto",
});

export const Icon = styled("img")({
  width: "2rem",
  marginBottom: "0.4rem",
});

export const Actions = styled("div")({
  marginTop: "auto",
  marginLeft: "auto",
});
