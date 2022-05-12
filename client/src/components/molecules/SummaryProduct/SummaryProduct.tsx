import { BasketItem } from "types";
import { Container, Name, Price } from "./SummaryProduct.styles";

type Props = {
  item: BasketItem;
};

export const SummaryProduct: React.FunctionComponent<Props> = ({ item }) => {
  return (
    <Container>
      <Name>{`${item.quantity}x  ${item.product.name}`}</Name>
      <Price>
        {item.product.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}
      </Price>
    </Container>
  );
};
