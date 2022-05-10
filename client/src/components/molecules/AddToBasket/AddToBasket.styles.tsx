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
  paddingTop: "1rem",
  paddingBottom: "0rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
});

export const SubText = styled(Typography)({
  fontSize: "14px",
  maxWidth: "100%",
  overflowWrap: "break-word",
  textAlign: "right",
});

export const ButtonContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
});

export const AddToBasketButton = styled(Button)({
  fontSize: "14px",
  padding: "1rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  marginTop: "1rem",
  marginBottom: "1.5rem",
  textTransform: "none",
  fontWeight: "normal",
});

export const StockContainer = styled("div")({
  display: "flex",
  marginTop: "1rem",
  marginBottom: "1.5rem",
  marginRight: "0.75rem",
});
