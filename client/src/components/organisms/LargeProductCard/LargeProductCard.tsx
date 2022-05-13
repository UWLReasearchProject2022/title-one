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
import { ProductPlatform } from "types";

type Props = {
  productPlatform: ProductPlatform;
};

export const LargeProductCard: React.FunctionComponent<Props> = ({
  productPlatform,
}) => {
  return (
    <Container>
      <Header>
        <HeaderText color="primary">{`${
          productPlatform.product.name
        } - ${productPlatform.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}`}</HeaderText>
        <RatingContainer>
          <ProductRating
            readOnly
            precision={0.5}
            value={productPlatform.rating}
          />
          <Description>{`(${productPlatform.review_count})`}</Description>
        </RatingContainer>
      </Header>
      <Body>
        <Image src={productPlatform.product.image_url} />
        <Description color="primary">
          {productPlatform.product.description}
        </Description>
      </Body>
    </Container>
  );
};
