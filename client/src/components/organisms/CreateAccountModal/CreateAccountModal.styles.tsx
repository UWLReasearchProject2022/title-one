import { styled } from "@mui/system";
import { Button, Paper, TextField, Typography } from "@mui/material";

export const Container = styled(Paper)({
  position: "absolute",
  left: "50%",
  top: "45%",
  transform: "translateX(-50%) translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3rem",
  width: "20rem",
});

export const HeaderText = styled(Typography)({
  fontSize: "20px",
});

export const SubHeaderText = styled(Typography)({
  textAlign: "center",
  marginTop: "0.5rem",
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const InputContainer = styled("div")({
  marginTop: "2rem",
});

export const Input = styled(TextField)({
  width: "100%",
  marginBottom: "0.25rem",
});

export const SplitInput = styled(TextField)({
  width: "calc(50% - 0.5rem)",
  marginBottom: "0.25rem",
});

export const ProceedButton = styled(Button)({ marginTop: "0.5rem" });
