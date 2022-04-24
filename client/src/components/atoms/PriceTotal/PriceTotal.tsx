import { Container, Total } from "./PriceTotal.styles";

type Props = {
  total: number;
};

export const PriceTotal: React.FunctionComponent<Props> = ({ total }) => {
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
