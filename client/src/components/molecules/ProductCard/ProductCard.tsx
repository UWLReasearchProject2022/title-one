import { ProductPlatform } from "types";
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
  ButtonLink,
  ViewButton,
} from "./ProductCard.styles";
import { LikeButton } from "components";
import { pegiIcons, platformIcons } from "utils/icons";

type Props = {
  productPlatform: ProductPlatform;
};

export const ProductCard: React.FunctionComponent<Props> = ({
  productPlatform,
}) => {
  return (
    <Container>
      <Header>
        <Title>{productPlatform.product.name}</Title>
        <Price>
          {productPlatform.price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </Price>
      </Header>
      <Developer>{productPlatform.product.developer}</Developer>
      <Body>
        <Image src={productPlatform.product.image_url} />
        <Description>{productPlatform.product.short_description}</Description>
        <IconStack>
          <Icon src={platformIcons[productPlatform.platform.name]} />
          <Icon src={pegiIcons[productPlatform.product.age_rating]} />
        </IconStack>
        <Actions>
          <LikeButton />
          <ButtonLink to={`/search/${productPlatform.product_platform_id}`}>
            <ViewButton variant="contained" color="secondary">
              VIEW
            </ViewButton>
          </ButtonLink>
        </Actions>
      </Body>
    </Container>
  );
};
