import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const Container = styled("div")({
  backgroundColor: "black",
  height: "4rem",
  width: "75vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  paddingLeft: "12.5vw",
  paddingRight: "12.5vw",
});

export const Logo = styled("img")({
  height: "32",
  width: "86.82px",
  marginRight: "4%",
});

export const ConsoleButton = styled(Button)({
  textTransform: "none",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  marginLeft: "4%",
});

export const RightContainer = styled("div")({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
});

export const SmallSpacer = styled("div")({
  width: "0.5rem",
});

export const LargeSpacer = styled("div")({
  width: "4%",
});

export const UserText = styled(Typography)({
  height: "19px",
  lineHeight: "19px",
  marginRight: "0.25rem",
});
