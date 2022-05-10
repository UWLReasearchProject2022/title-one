import { styled } from "@mui/system";
import { Paper, Typography, Button } from "@mui/material";

export const Container = styled(Paper)({
  padding: "1.5rem",
  width: "calc(27.5% - 2rem)",
});

export const Title = styled(Typography)({
  marginBottom: "1rem",
  fontSize: "16px",
});

export const TotalContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1rem",
});

export const TotalPrice = styled(Typography)({
  marginBottom: "1rem",
  fontSize: "1.2rem",
  marginLeft: "auto",
});

export const PayWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
});

export const PayButton = styled(Button)({
  width: "30%",
});
