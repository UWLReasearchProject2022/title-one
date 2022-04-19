import { styled } from "@mui/system";
import { Typography, LinearProgress } from "@mui/material";

export const Container = styled("div")({});

export const Text = styled(Typography)({});

export const LinearRating = styled(LinearProgress)({
  width: "100%",
  marginTop: "0.4rem",
  marginBottom: "0.8rem",
  borderRadius: "9.5rem",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#faaf00",
  },
});
