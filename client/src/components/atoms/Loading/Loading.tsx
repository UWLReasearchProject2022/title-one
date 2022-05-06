import React from "react";
import { Container } from "./Loading.styles";
import { Typography } from "@mui/material";

export const Loading: React.FunctionComponent = () => {
  return (
    <Container>
      <Typography color="primary">Loading... ⌛</Typography>
    </Container>
  );
};
