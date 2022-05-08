import { styled } from "@mui/system";
import { Grid, TextField } from "@mui/material";

export const GridContainer = styled(Grid)({
  width: "100%",
  maxWidth: "46rem",
  marginTop: "1.5rem",
});

export const GridItem = styled(Grid)({
  minWidth: "23rem",
});

export const Input = styled(TextField)({
  width: "22rem",
});
