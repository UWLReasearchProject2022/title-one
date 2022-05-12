import { styled } from "@mui/system";
import { Paper, Typography, Button, Divider } from "@mui/material";

export const Container = styled(Paper)({
  padding: "1.5rem",
  width: "calc(27.5% - 2rem)",
});

export const Title = styled(Typography)({
  marginBottom: "1rem",
  fontSize: "18px",
});

export const TotalContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1rem",
});

export const TotalPrice = styled(Typography)({
  fontSize: "18px",
  marginLeft: "auto",
});

export const PayWrapper = styled("div")({
  display: "flex",
  justifyContent: "end",
  marginTop: "1.5rem",
});

export const PayNowButton = styled(Button)({
  fontSize: "14px",
  padding: "1rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  marginBottom: "1.5rem",
  textTransform: "none",
  fontWeight: "normal",
});

export const StyledDivider = styled(Divider)({
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
});
