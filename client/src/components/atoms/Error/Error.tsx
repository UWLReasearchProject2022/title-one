import React from "react";
import { Container } from "./Error.styles";
import { Typography } from "@mui/material";

type Props = {
  message?: string;
};

export const Error: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <Container>
      <Typography color="primary">{`${
        message || "An error has occurred"
      } ⚠️`}</Typography>
    </Container>
  );
};
