import { Paper, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Paper)({
  marginTop: "2rem",
  padding: "1rem",
  display: "flex",
});

export const GoToCheckout = styled(Button)({
  textTransform: "capitalize",
  fontSize: "1em",
  fontWeight: "normal",
  marginLeft: "auto",
});

export const ContinueShopping = styled(Button)({
  textTransform: "capitalize",
  fontSize: "1em",
  fontWeight: "normal",
});
