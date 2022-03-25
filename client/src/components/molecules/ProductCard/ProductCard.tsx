// import { Typography } from "@mui/material";
import { Product } from "types";
import {
  Container,
  Header,
  Title,
  Price,
  Developer,
  Body,
  Image,
  Description,
} from "./ProductCard.styles";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{product.name}</Title>
        <Price>
          {product.price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </Price>
      </Header>
      <Developer>{product.developer}</Developer>
      <Body>
        <Image src={product.image} />
        <Description>{product.short_description}</Description>
      </Body>
    </Container>
  );
};
