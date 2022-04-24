import { styled } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled("div")({
  margin: "4rem",
  marginLeft: "12.5vw",
  marginRight: "12.5vw",
  display: "flex",
});

export const StyledDivider = styled(Divider)({
  marginTop: "4rem",
});

export const LogoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  width: "25%",
});

export const Logo = styled("img")({
  height: "1.75rem",
  paddingBottom: "0.5rem",
});

export const Content = styled("div")({
  width: "75%",
  display: "flex",
  justifyContent: "space-between",
});

export const Column = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const HeaderText = styled(Typography)({
  fontWeight: "550",
});

export const BodyText = styled(Typography)({
  whiteSpace: "pre-line",
  paddingTop: "0.5rem",
  fontSize: "14px",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
});
