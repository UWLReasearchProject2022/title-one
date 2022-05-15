import {
  Container,
  Title,
  TotalContainer,
  TotalPrice,
  PayNowButton,
  PayWrapper,
  StyledDivider,
  DeliveryContainer,
  DeliveryName,
  DeliveryPrice,
} from "./OrderSummary.styles";
import { SummaryProduct } from "components";
import { BasketItem, DeliveryOption } from "types";

type Props = {
  basket: BasketItem[];
  total: number;
  deliveryOption: DeliveryOption;
};

export const OrderSummary: React.FunctionComponent<Props> = ({
  basket,
  total,
  deliveryOption,
}) => {
  return (
    <Container>
      <Title>Order Summary</Title>
      <StyledDivider />
      {basket &&
        basket.map((item) => (
          <SummaryProduct
            key={item.productPlatform.product_platform_id}
            item={item}
          />
        ))}
      <DeliveryContainer>
        <DeliveryName>{deliveryOption.text}</DeliveryName>
        <DeliveryPrice>
          {deliveryOption.price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </DeliveryPrice>
      </DeliveryContainer>
      <StyledDivider />
      <TotalContainer>
        <Title style={{ marginBottom: "0px" }}>Total</Title>
        <TotalPrice>
          {(total + deliveryOption.price).toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </TotalPrice>
      </TotalContainer>
      <StyledDivider />
      <PayWrapper>
        <PayNowButton
          disabled={total === 0}
          variant="contained"
          type="submit"
          color="secondary"
          form="payment-form"
        >
          Pay now
        </PayNowButton>
      </PayWrapper>
    </Container>
  );
};
