import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CollapseButton } from "components";

export const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

export const FieldsWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Separator = styled("span")({
  margin: "0 1em",
});

export const Label = styled(Typography)({
  fontSize: "1em",
  width: "50%",
  marginBottom: "1.5em",
});

export const ToggleCollapse = styled(CollapseButton)({
  marginLeft: "auto",
  width: "50%",
});
