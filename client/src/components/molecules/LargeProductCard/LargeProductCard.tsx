import React from "react";
import {
  Container,
  Header,
  HeaderText,
  Body,
  Image,
  Description,
  ProductRating,
} from "./LargeProductCard.styles";
import { Product } from "types";

type Props = {
  product: Product;
};

export const LargeProductCard: React.FunctionComponent<Props> = ({
  product,
}) => {
  return (
    <Container>
      <Header>
        <HeaderText color="primary">{product.name}</HeaderText>
        <ProductRating readOnly precision={0.5} value={product.rating} />
      </Header>
      <Body>
        <Image src={product.image} />
        <Description color="primary">{product.description}</Description>
      </Body>
    </Container>
  );
};
