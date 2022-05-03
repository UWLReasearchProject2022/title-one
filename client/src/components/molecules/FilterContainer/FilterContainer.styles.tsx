import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { CollapseButton } from "components";

export const Wrapper = styled("div")({});

export const FieldsWrapper = styled("div")({
  marginBottom: "1rem",
});

export const TitleWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Label = styled(Typography)({
  fontSize: "1rem",
});

export const ToggleCollapse = styled(CollapseButton)({
  marginLeft: "auto",
});
