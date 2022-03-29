import React from "react";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { StyledLink, Text } from "./StepBack.styles";

type Props = {
  to: string;
  page: string;
};

export const StepBack: React.FunctionComponent<Props> = ({ to, page }) => {
  return (
    <StyledLink to={to}>
      <KeyboardBackspaceSharpIcon style={{ marginRight: "0.5rem" }} />
      <Text>{`Back to ${page}`}</Text>
    </StyledLink>
  );
};
