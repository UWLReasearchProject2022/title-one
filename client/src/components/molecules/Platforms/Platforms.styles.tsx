import { styled } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled(Paper)({
  width: "calc(100% - 3rem)",
  padding: "1.5rem",
  marginTop: "2rem",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "space-evenly",
});

export const PlatformContainer = styled(Link)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  textDecoration: "none",
});

export const PlatformText = styled(Typography)({
  marginTop: "0.5rem",
  textAlign: "center",
});

export const PlatformImage = styled("img")({
  height: "2rem",
});
