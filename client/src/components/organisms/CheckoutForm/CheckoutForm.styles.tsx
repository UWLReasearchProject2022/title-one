import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PaymentElement } from "@stripe/react-stripe-js";

export const Container = styled(Paper)({
  padding: "1.5rem",
  width: "calc(72.5% - 1rem)",
  minWidth: "25em",
  marginRight: "1rem",
});

export const SplitInput = styled(TextField)({
  marginRight: "1rem",
  width: "10.5rem",
});

export const TextInput = styled(TextField)({
  marginRight: "1rem",
  width: "22rem",
});

export const StyledDivider = styled(Divider)({
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
});

export const Row = styled("div")({
  display: "flex",
  width: "100%",
  marginBottom: "1.5rem",
});

export const FormLabel = styled(Typography)({
  marginBottom: "1rem",
  marginRight: "1rem",
  fontSize: "18px",
});

export const SubText = styled(Typography)({
  fontSize: "16px",
  marginBottom: "1.5rem",
});

export const Section = styled("div")({
  marginBottom: "1rem",
});

export const SubmitButton = styled(Button)({
  marginTop: "2rem",
  marginLeft: "auto",
});

export const Payment = styled(PaymentElement)({
  width: "calc(72.5% - 1rem)",
  marginBottom: "0.5rem",
});

export const ErrorContainer = styled("div")({
  height: "1rem",
  paddingTop: "0.5rem",
});

export const ErrorText = styled(Typography)({
  color: "#f44336",
  fontWeight: "400",
  fontSize: "0.75rem",
  letterSpacing: "0.03333em",
  marginLeft: "14px",
});

export const HelperText = styled(Typography)({ fontSize: "12px" });
