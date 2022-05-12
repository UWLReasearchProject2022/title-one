import React, { useState } from "react";
import {
  Container,
  Section,
  Input,
  DropdownItem,
  Text,
  SubText,
  SubContainer,
  PayNowButton,
  TextRow,
} from "./CheckoutOptions.styles";
import { Divider } from "@mui/material";
import { deliveryOptions } from "./config";
import { DeliveryOption } from "types";
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

type Props = {
  basketTotal: number;
};

export const CheckoutOptions: React.FunctionComponent<Props> = ({
  basketTotal,
}) => {
  const navigate = useNavigate();
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
      <Section>
        <Text style={{ fontSize: "18px" }}>Checkout and pay</Text>
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
      <SubContainer>
        <TextRow>
          <SubText>Basket total</SubText>
          <SubText>
            {basketTotal.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </SubText>
        </TextRow>
        <TextRow>
          <SubText>Delivery cost</SubText>
          <SubText>
            {delivery.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </SubText>
        </TextRow>
      </SubContainer>
      <Divider />
      <SubContainer>
        <TextRow>
          <SubText style={{ fontSize: "18px" }}>Total</SubText>
          <SubText style={{ fontSize: "18px" }}>
            {(delivery.price + basketTotal).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </SubText>
        </TextRow>
      </SubContainer>
      <Divider />
      <SubContainer>
        <PayNowButton
          disabled={basketTotal === 0}
          onClick={onCheckoutAndPay}
          variant="contained"
          color="secondary"
        >
          Checkout and pay
        </PayNowButton>
      </SubContainer>
    </Container>
  );
};
