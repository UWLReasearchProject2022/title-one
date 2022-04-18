import { Container, Total } from "./PriceTotal.styles";
import { BasketItem } from "types";

type Props = {
  basket: BasketItem[];
};

export const PriceTotal: React.FunctionComponent<Props> = ({ basket }) => {
  const total = basket.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  return (
    <>
      <Container>
        <Total>
          Total:{" "}
          {total.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </Total>
      </Container>
    </>
  );
};
