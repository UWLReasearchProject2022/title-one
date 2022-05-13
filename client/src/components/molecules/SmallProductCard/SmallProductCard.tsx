import React from "react";
import {
  Container,
  HeaderText,
  SubHeaderText,
  Image,
  ActionContainer,
  PriceText,
  ViewButton,
  TextContainer,
} from "./SmallProductCard.styles";
import { ProductPlatform } from "types";
import { Link } from "react-router-dom";

type Props = {
  productPlatform: ProductPlatform;
  style: React.CSSProperties;
};

export const SmallProductCard: React.FunctionComponent<Props> = ({
  productPlatform,
  style,
}) => {
  return (
    <Container style={style}>
      <TextContainer>
        <HeaderText>{productPlatform.product.name}</HeaderText>
        <SubHeaderText>{productPlatform.product.developer}</SubHeaderText>
      </TextContainer>
      <Image src={productPlatform.product.image_url} />
      <ActionContainer>
        <PriceText>
          {productPlatform.price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </PriceText>
        <Link to={`/search/${productPlatform.product_platform_id}`}>
          <ViewButton variant="contained" color="secondary">
            VIEW
          </ViewButton>
        </Link>
      </ActionContainer>
    </Container>
  );
};
