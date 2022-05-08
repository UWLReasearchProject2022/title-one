import {
  Container,
  Title,
  TotalContainer,
  TotalPrice,
  PayButton,
  PayWrapper,
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
      <Title variant="h2">Order Summary</Title>
      {basket &&
        basket.map((item) => (
          <SummaryProduct key={item.product.id} item={item} />
        ))}
      <TotalContainer>
        <Title variant="h2">Total</Title>
        <TotalPrice variant="h3">
          {total.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </TotalPrice>
      </TotalContainer>
      <PayWrapper>
        <PayButton variant="contained" type="submit" form="payment-form">
          Pay
        </PayButton>
      </PayWrapper>
    </Container>
  );
};
