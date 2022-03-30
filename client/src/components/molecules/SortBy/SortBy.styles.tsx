import { styled } from "@mui/system";
import { Typography, TextField, MenuItem } from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Label = styled(Typography)({
  marginRight: "1rem",
});

export const Dropdown = styled(TextField)({
  width: "11rem",
});

export const DropdownItem = styled(MenuItem)({
  fontSize: "14px",
});
