import React, { useState } from "react";
import {
  Container,
  Section,
  Input,
  DropdownItem,
  Text,
} from "./AddToBasket.styles";
import { Divider } from "@mui/material";
import { Product, Platform } from "types";

type FormData = {
  platform: Platform;
  edition: string;
  quantity: number;
};

type Props = {
  product: Product;
};

export const AddToBasket: React.FunctionComponent<Props> = ({ product }) => {
  const initialFormData: FormData = {
    platform: product.platform,
    edition: "Standard",
    quantity: 1,
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [quantity, setQuantity] = useState<string>(
    `${initialFormData.quantity}`,
  );

  return (
    <Container>
      <Section style={{ justifyContent: "center" }}>
        <Text>Add to basket</Text>
      </Section>
      <Divider />
      <Section>
        <Text>Select your platform</Text>
        <Input
          select
          value={formData.platform}
          onChange={(event) =>
            setFormData({
              ...formData,
              platform: event.target.value as Platform,
            })
          }
          size="small"
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        >
          <DropdownItem value={product.platform}>
            {product.platform}
          </DropdownItem>
        </Input>
      </Section>
      <Divider />
      <Section>
        <Text>Select the edition</Text>
        <Input
          select
          value={formData.edition}
          onChange={(event) =>
            setFormData({
              ...formData,
              edition: event.target.value as string,
            })
          }
          size="small"
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        >
          <DropdownItem value={"Standard"}>{"Standard"}</DropdownItem>
        </Input>
      </Section>
      <Divider />
      <Section>
        <Text>Quantity</Text>
        <Input
          value={quantity}
          onChange={(event) => {
            const newValue = event.target.value;
            const intNewValue = parseInt(newValue);
            if (newValue === "" || (intNewValue && intNewValue > 0)) {
              setQuantity(newValue);
            }
          }}
          onBlur={() => {
            const newQuantity = quantity === "" ? 1 : parseInt(quantity);
            setQuantity(`${newQuantity}`);
            setFormData({
              ...formData,
              quantity: newQuantity,
            });
          }}
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
