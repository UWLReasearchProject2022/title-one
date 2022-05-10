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
import { Product } from "types";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
  style: React.CSSProperties;
};

export const SmallProductCard: React.FunctionComponent<Props> = ({
  product,
  style,
}) => {
  return (
    <Container style={style}>
      <TextContainer>
        <HeaderText>{product.name}</HeaderText>
        <SubHeaderText>{product.developer}</SubHeaderText>
      </TextContainer>
      <Image src={product.image} />
      <ActionContainer>
        <PriceText>
          {product.price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </PriceText>
        <Link to={`/search/${product.id}`}>
          <ViewButton variant="contained" color="secondary">
            VIEW
          </ViewButton>
        </Link>
      </ActionContainer>
    </Container>
  );
};
