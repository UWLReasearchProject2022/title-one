import React from "react";
import { Typography } from "@mui/material";
import { Container } from "./Placeholder.styles";

export const Placeholder: React.FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Typography color="primary">{`🚧 ${children}`}</Typography>
    </Container>
  );
};
