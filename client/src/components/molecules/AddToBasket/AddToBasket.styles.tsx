import { styled } from "@mui/system";
import { Paper, TextField, Typography, MenuItem } from "@mui/material";

export const Container = styled(Paper)({
  width: "27.5%",
});

export const Section = styled("div")({
  padding: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Text = styled(Typography)({ fontSize: "16px" });

export const Input = styled(TextField)({
  width: "100px",
});

export const DropdownItem = styled(MenuItem)({
  fontSize: "14px",
});
