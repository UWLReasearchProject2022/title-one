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
  width: "19rem",
  height: "100%",
  padding: "1.5rem",
  paddingTop: "0rem",
  paddingBottom: "2.5rem",
  marginRight: "1rem",
});

export const TabContainer = styled("div")({
  display: "flex",
  paddingTop: "1rem",
  paddingBottom: "1rem",
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
