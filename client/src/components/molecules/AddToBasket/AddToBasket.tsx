import React from "react";
import { Container, Section, Input, Text } from "./AddToBasket.styles";
import { Divider } from "@mui/material";

export const AddToBasket: React.FunctionComponent = () => {
  return (
    <Container>
      <Section>
        <Text>Select your platform</Text>
        <Input
          select
          size="small"
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        />
      </Section>
      <Divider color="primary" />
      <Section>
        <Text>Select the edition</Text>
        <Input
          select
          size="small"
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        />
      </Section>
      <Divider color="primary" />
      <Section>
        <Text>Quantity</Text>
        <Input
          size="small"
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        />
      </Section>
      <Divider color="primary" />
    </Container>
  );
};
