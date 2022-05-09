import { styled } from "@mui/system";
import { Paper, TextField, Typography, MenuItem, Button } from "@mui/material";

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
  width: "8rem",
});

export const DropdownItem = styled(MenuItem)({
  fontSize: "14px",
});

export const PriceContainer = styled("div")({
  padding: "1.5rem",
  paddingBottom: "0rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
});

export const SubText = styled(Typography)({
  fontSize: "14px",
});

export const PayNowButton = styled(Button)({
  marginTop: "1.5rem",
});
