import React from "react";
import { Header } from "components";
import { Body } from "./PageTemplate.styles";

export const PageTemplate: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};
