import React, { useState } from "react";
import {
  Container,
  Section,
  Input,
  DropdownItem,
  Text,
  SubText,
  PriceContainer,
  PayNowButton,
} from "./CheckoutOptions.styles";
import { Divider } from "@mui/material";
import { deliveryOptions } from "./config";
import { DeliveryOption } from "types";
import { useBasket } from "utils/lib/useBasket";
import { useNavigate } from "react-router-dom";

const getDeliveryFromKey = (key: string): DeliveryOption | undefined => {
  let deliveryOption;
  deliveryOptions.some((option) => {
    if (option.key === key) {
      deliveryOption = option;
      return true;
    }
    return false;
  });
  return deliveryOption;
};

export const CheckoutOptions: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { total: basketTotal } = useBasket();
  const initialDelivery = getDeliveryFromKey("first_class");
  const [delivery, setDelivery] = useState<DeliveryOption>(
    initialDelivery ? initialDelivery : deliveryOptions[0],
  );

  const handleDeliveryChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = getDeliveryFromKey(event.target.value);
    newValue && setDelivery(newValue);
  };

  const onCheckoutAndPay = () => {
    navigate(`/checkout?delivery=${delivery.key}`);
  };

  return (
    <Container>
      <Section style={{ justifyContent: "center" }}>
        <Text>Checkout and pay</Text>
      </Section>
      <Divider />
      <Section>
        <Text>Delivery option</Text>
        <Input
          select
          value={delivery.key}
          onChange={handleDeliveryChange}
          size="small"
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        >
          {deliveryOptions.map((option) => (
            <DropdownItem key={option.key} value={option.key}>
              {`${option.text} - ${option.price.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
              })}`}
            </DropdownItem>
          ))}
        </Input>
      </Section>
      <Divider />
      <Section>
        <Text>Discount code</Text>
        <Input
          disabled
          size="small"
          placeholder="Currently unavailable"
          value=""
          InputProps={{
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        />
      </Section>
      <Divider />
      <PriceContainer>
        <SubText
          style={{ marginBottom: "0.25rem" }}
        >{`Basket: ${basketTotal.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}`}</SubText>
        <SubText>{`Delivery: ${delivery.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}`}</SubText>
      </PriceContainer>
      <PriceContainer>
        <SubText>{`Total: ${(delivery.price + basketTotal).toLocaleString(
          "en-GB",
          {
            style: "currency",
            currency: "GBP",
          },
        )}`}</SubText>
        <PayNowButton
          onClick={onCheckoutAndPay}
          variant="contained"
          color="secondary"
        >
          Checkout and pay!
        </PayNowButton>
      </PriceContainer>
    </Container>
  );
};
