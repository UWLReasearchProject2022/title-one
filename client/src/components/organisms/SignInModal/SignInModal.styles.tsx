import { styled } from "@mui/system";
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const Container = styled(Paper)({
  position: "absolute",
  left: "50%",
  top: "45%",
  transform: "translateX(-50%) translateY(-50%)",
  display: "flex",
  padding: "3rem",
});

export const MethodContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "16rem",
});

export const StyledDivider = styled(Divider)({
  marginLeft: "3rem",
  marginRight: "3rem",
});

export const Bold = styled("span")({
  fontWeight: "bold",
});

export const HeaderText = styled(Typography)({
  fontSize: "20px",
});

export const SubHeaderText = styled(Typography)({
  textAlign: "center",
  marginTop: "0.5rem",
});

export const Form = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const InputContainer = styled("div")({
  marginTop: "2rem",
});

export const Input = styled(TextField)({});

export const ProceedButton = styled(Button)({
  marginTop: "2rem",
});

export const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});
