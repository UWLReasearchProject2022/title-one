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
} from "./ProductCard.styles";
import { Button } from "@mui/material";
import { LikeButton } from "components";
import { pegiIcons, platformIcons } from "utils/icons";
import { addToBasket } from "utils/lib/addToBasket";
type Props = {
  product: Product;
};

export const ProductCard: React.FunctionComponent<Props> = ({ product }) => {
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
        <IconStack>
          <Icon src={platformIcons[product.platform]} />
          <Icon src={pegiIcons[product.age_rating]} />
        </IconStack>
        <Actions>
          <LikeButton />
          <Button variant="contained" color="secondary">
            View
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => addToBasket(product)}
          >
            Buy
          </Button>
        </Actions>
      </Body>
    </Container>
  );
};
