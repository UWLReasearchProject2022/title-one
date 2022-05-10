import { BasketItem } from "types";
import {
  Container,
  DividerStyled,
  Name,
  Price,
  Quantity,
} from "./SummaryProduct.styles";

type Props = {
  item: BasketItem;
};

export const SummaryProduct: React.FunctionComponent<Props> = ({ item }) => {
  return (
    <Container>
      <Quantity>{item.quantity} x</Quantity>
      <Name>{item.productPlatform.product.name}</Name>
      <Price>
        {item.productPlatform.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}
      </Price>
      <DividerStyled />
    </Container>
  );
};
