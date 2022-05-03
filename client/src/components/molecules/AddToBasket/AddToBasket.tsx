import React from "react";
import {
  Container,
  Section,
  Input,
  DropdownItem,
  Text,
} from "./AddToBasket.styles";
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
        >
          <DropdownItem>PS4</DropdownItem>
        </Input>
      </Section>
      <Divider />
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
        >
          <DropdownItem>Standard</DropdownItem>
        </Input>
      </Section>
      <Divider />
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
      <Divider />
    </Container>
  );
};
