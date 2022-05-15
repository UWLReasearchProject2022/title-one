import { styled } from "@mui/system";
import { Paper, Typography, IconButton, Button } from "@mui/material";

export const Container = styled("div")({
  width: "100%",
  display: "flex",
});

export const CoverImage = styled("img")({
  position: "absolute",
  left: 0,
  top: "4rem",
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "calc(100vh - 4rem)",
  objectFit: "cover",
  objectPosition: "50% 50%",
  pointerEvents: "none",
});

export const Content = styled(Paper)({
  position: "absolute",
  left: "50%",
  top: "45%",
  maxWidth: "500px",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
});

export const Title = styled(Typography)({
  fontWeight: 650,
  fontSize: "26px",
  textAlign: "center",
});

export const SubTitle = styled(Typography)({
  marginTop: "2rem",
  textAlign: "center",
  lineHeight: "1rem",
});

export const StyledIconButton = styled(IconButton)({
  padding: "0rem",
  marginLeft: "0.25rem",
  marginBottom: "0.25rem",
});

export const HomeButton = styled(Button)({
  fontSize: "14px",
  padding: "1rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  marginTop: "2rem",
  textTransform: "none",
  fontWeight: "normal",
});
