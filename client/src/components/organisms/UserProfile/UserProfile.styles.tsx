import { styled } from "@mui/system";
import { Typography, Divider, TextField, IconButton } from "@mui/material";

export const Header = styled("div")({
  padding: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
});

export const HeaderTextContainer = styled("div")({});

export const HeaderText = styled(Typography)({ fontSize: "18px" });

export const SubHeaderText = styled(Typography)({ marginTop: "0.25rem" });

export const StyledDivider = styled(Divider)({});

export const Body = styled("div")({
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
});

export const BodyText = styled(Typography)({ marginBottom: "0.25rem" });

export const Input = styled(TextField)({
  width: "100%",
  marginBottom: "0.25rem",
});

export const SplitInput = styled(TextField)({
  width: "calc(50% - 0.5rem)",
  marginBottom: "0.25rem",
});

export const Form = styled("form")({
  width: "22rem",
  marginTop: "1.5rem",
});

export const ControlsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledIconButton = styled(IconButton)({
  height: "40px",
  width: "40px",
});
