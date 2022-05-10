import { Button, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PaymentElement } from "@stripe/react-stripe-js";

export const Container = styled(Paper)({
  padding: "1.5rem",
  width: "calc(72.5% - 1rem)",
  minWidth: "25em",
  marginRight: "1rem",
});

export const TextInput = styled(TextField)({
  marginBottom: "1rem",
  marginRight: "1rem",
  width: "50%",
});

export const Row = styled("div")({
  display: "flex",
  width: "100%",
});

export const FormLabel = styled(Typography)({
  marginBottom: "1rem",
  marginRight: "1rem",
  fontSize: "16px",
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
  marginBottom: "1rem",
});
