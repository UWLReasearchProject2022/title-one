import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  marginTop: "1rem",
  marginBottom: "1rem",
});

export const Name = styled(Typography)({
  fontSize: "16px",
  marginRight: "1.5rem",
});

export const Price = styled(Typography)({
  fontSize: "16px",
});
