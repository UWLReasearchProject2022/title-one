import { styled } from "@mui/system";
import { Card, Typography } from "@mui/material";

export const Container = styled(Card)({
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
  position: "relative",
  display: "flex",
  marginTop: "0.3rem",
});

export const Image = styled("img")({
  height: "11rem",
  objectFit: "contain",
  objectPosition: "top",
});

export const Description = styled(Typography)({
  fontSize: "0.9rem",
  width: "calc(100% - 16rem)",
  margin: "0rem 1rem",
});

export const IconStack = styled("div")({
  position: "absolute",
  right: 0,
  top: 0,
  width: "2rem",
  marginLeft: "auto",
});

export const Icon = styled("img")({
  width: "2rem",
  marginBottom: "0.4rem",
});

export const Actions = styled("div")({
  position: "absolute",
  right: 0,
  bottom: 0,
});
