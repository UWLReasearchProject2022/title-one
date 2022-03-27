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
  IconStack,
  Icon,
  Actions,
  Details,
} from "./ProductCard.styles";
import { Button } from "@mui/material";
import { LikeButton } from "components";
import { pegiIcons, platformIcons } from "utils/icons";

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
        <Details>
          <Description>{product.short_description}</Description>
          <IconStack>
            <Icon src={platformIcons[product.platform]} />
            <Icon src={pegiIcons[product.age_rating]} />
          </IconStack>
          <Actions>
            <LikeButton />
            <Button variant="contained" color="secondary">
              View
            </Button>
          </Actions>
        </Details>
      </Body>
    </Container>
  );
};
