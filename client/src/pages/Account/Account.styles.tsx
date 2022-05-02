import { styled } from "@mui/system";
import { Paper, Typography, Button, Divider } from "@mui/material";

export const ErrorContainer = styled("div")({
  width: "100%",
  minHeight: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const SignInText = styled(Typography)({});

export const Container = styled("div")({
  marginTop: "2rem",
  width: "100%",
  display: "flex",
  minHeight: "calc(100vh - 12rem)",
});

export const TabsContainer = styled(Paper)({
  width: "22rem",
  height: "auto",
  marginRight: "1rem",
});

export const TabContainer = styled("div")({
  padding: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ContentContainer = styled(Paper)({
  width: "calc(100% - 23rem)",
  minHeight: "inherit",
});

export const TabButton = styled(Button)({
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "normal",
  left: "-0.5rem",
});

export const SignOutButton = styled(Button)({
  fontSize: "14px",
  padding: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  textTransform: "none",
  fontWeight: "normal",
});

export const HeaderText = styled(Typography)({
  fontSize: "18px",
});

export const BodyText = styled(Typography)({});

export const StyledDivider = styled(Divider)({});
