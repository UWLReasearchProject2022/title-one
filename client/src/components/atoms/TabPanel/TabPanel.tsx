import React from "react";
import { Container } from "./TabPanel.styles";

type Props = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export const TabPanel: React.FunctionComponent<Props> = ({
  children,
  value,
  index,
}) => {
  return (
    <Container hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && children}
    </Container>
  );
};
