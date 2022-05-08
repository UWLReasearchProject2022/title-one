import { Button, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PaymentElement } from "@stripe/react-stripe-js";

export const Container = styled(Paper)({
  padding: "1rem",
  width: "60%",
  minWidth: "25em",
});

export const TextInput = styled(TextField)({
  marginBottom: "1rem",
  marginRight: "1rem",
  width: "15rem",
});

export const Row = styled("div")({
  display: "flex",
  width: "100%",
});

export const FormLabel = styled(Typography)({
  marginBottom: "1rem",
  marginRight: "1rem",
  fontSize: "1.2rem",
});

export const Section = styled("div")({
  marginBottom: "1rem",
});

export const SubmitButton = styled(Button)({
  marginTop: "2rem",
  marginLeft: "auto",
});

export const Payment = styled(PaymentElement)({
  width: "80%",
  marginBottom: "1rem",
});
