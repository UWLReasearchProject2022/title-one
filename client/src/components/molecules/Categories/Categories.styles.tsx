import { styled } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled("div")({});

export const StyledGrid = styled(Grid)({});

export const StyledLink = styled(Link)({
  textDecoration: "none",
});

export const Item = styled(Paper)({
  display: "flex",
  padding: "1.5rem",
  height: "17.5vh",
  minHeight: "8rem",
  "&:hover": {
    backgroundColor: "#070707",
  },
});

export const TextContainer = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const NameText = styled(Typography)({
  padding: "1rem",
  textAlign: "center",
});

export const DescriptionText = styled(Typography)({
  fontSize: "14px",
  textAlign: "center",
});

export const Image = styled("img")({
  width: "calc(50% - 1.5rem)",
  minWidth: "12rem",
  marginLeft: "1.5rem",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "0.5rem",
  pointerEvents: "none",
});
