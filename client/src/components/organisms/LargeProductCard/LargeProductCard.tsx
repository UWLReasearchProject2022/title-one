import React from "react";
import {
  Container,
  Header,
  HeaderText,
  Body,
  Image,
  Description,
  ProductRating,
  RatingContainer,
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
        <HeaderText color="primary">{`${
          product.name
        } - ${product.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}`}</HeaderText>
        <RatingContainer>
          <ProductRating readOnly precision={0.5} value={product.rating} />
          <Description>{`(${product.review_count})`}</Description>
        </RatingContainer>
      </Header>
      <Body>
        <Image src={product.image} />
        <Description color="primary">{product.description}</Description>
      </Body>
    </Container>
  );
};
