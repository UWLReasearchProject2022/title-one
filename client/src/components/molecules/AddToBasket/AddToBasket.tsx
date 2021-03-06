import React, { useState } from "react";
import {
  Container,
  Section,
  Input,
  DropdownItem,
  Text,
  PriceContainer,
  SubText,
  AddToBasketButton,
  ButtonContainer,
  StockContainer,
} from "./AddToBasket.styles";
import { Divider } from "@mui/material";
import { Platform, ProductPlatform } from "types";
import { useBasket } from "utils/lib/useBasket";
import {
  CheckCircleOutline as TickIcon,
  HighlightOff as CrossIcon,
} from "@mui/icons-material";
import { useSnackbar } from "notistack";

type FormData = {
  platform: Platform;
  edition: string;
  quantity: number;
};

type Props = {
  productPlatform: ProductPlatform;
};

export const AddToBasket: React.FunctionComponent<Props> = ({
  productPlatform,
}) => {
  const initialFormData: FormData = {
    platform: productPlatform.platform.name,
    edition: "Standard",
    quantity: 1,
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [quantity, setQuantity] = useState<string>(
    `${initialFormData.quantity}`,
  );
  const { enqueueSnackbar } = useSnackbar();

  const { addToBasket } = useBasket();

  const handleAdd = () => {
    for (let iteration = 0; iteration < formData.quantity; iteration++) {
      addToBasket(productPlatform);
    }
    enqueueSnackbar("Added to basket!", { variant: "success" });
  };

  const inStock = (): boolean => {
    return productPlatform.quantity >= formData.quantity;
  };

  return (
    <Container>
      <Section>
        <Text style={{ fontSize: "18px" }}>Add to basket</Text>
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
          <DropdownItem value={productPlatform.platform.name}>
            {productPlatform.platform.name}
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
      <PriceContainer>
        <SubText>
          {`${formData.quantity}x ${productPlatform.product.name} - ${formData.platform} - ${formData.edition}`}
        </SubText>
      </PriceContainer>
      <PriceContainer>
        <SubText>{`Total: ${(
          formData.quantity * productPlatform.price
        ).toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}`}</SubText>
        <ButtonContainer>
          <StockContainer>
            {inStock() ? (
              <TickIcon fontSize="small" htmlColor="#76C271" />
            ) : (
              <CrossIcon fontSize="small" htmlColor="#C25151" />
            )}
            <SubText
              color={inStock() ? "#76C271" : "#C25151"}
              style={{ paddingLeft: "0.25rem" }}
            >
              {inStock() ? "In stock" : "No stock"}
            </SubText>
          </StockContainer>
          <AddToBasketButton
            onClick={handleAdd}
            variant="contained"
            color="secondary"
            disabled={!inStock()}
          >
            Add to basket
          </AddToBasketButton>
        </ButtonContainer>
      </PriceContainer>
    </Container>
  );
};
