import {
  Container,
  Title,
  TotalContainer,
  TotalPrice,
  PayNowButton,
  PayWrapper,
  StyledDivider,
} from "./OrderSummary.styles";
import { SummaryProduct } from "components";
import { BasketItem } from "types";

type Props = {
  basket: BasketItem[];
  total: number;
};

export const OrderSummary: React.FunctionComponent<Props> = ({
  basket,
  total,
}) => {
  return (
    <Container>
      <Title>Order Summary</Title>
      <StyledDivider />
      {basket &&
        basket.map((item) => (
          <SummaryProduct key={item.product.id} item={item} />
        ))}
      <StyledDivider />
      <TotalContainer>
        <Title style={{ marginBottom: "0px" }}>Total</Title>
        <TotalPrice>
          {total.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </TotalPrice>
      </TotalContainer>
      <StyledDivider />
      <PayWrapper>
        <PayNowButton
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
