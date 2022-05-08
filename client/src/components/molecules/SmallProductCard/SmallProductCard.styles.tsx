import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled("div")({
  height: "18rem",
  display: "flex",
  flexDirection: "column",
});

export const HeaderText = styled(Typography)({});

export const SubHeaderText = styled(Typography)({
  fontSize: "0.7rem",
});

export const TextContainer = styled("div")({
  height: "15%",
});

export const Image = styled("img")({
  height: "70%",
  objectFit: "contain",
  objectPosition: "top",
  pointerEvents: "none",
});

export const ActionContainer = styled("div")({
  paddingTop: "1rem",
  height: "calc(15% - 1rem)",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const PriceText = styled(Typography)({});

export const ViewButton = styled(Button)({
  width: "4.5rem",
});
