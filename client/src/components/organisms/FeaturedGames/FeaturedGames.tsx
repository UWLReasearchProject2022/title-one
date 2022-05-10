import React from "react";
import { Container, OverflowContainer } from "./FeaturedGames.styles";
import { Loading, Error, SmallProductCard } from "components";
import { useFeatured } from "queries";
import { ProductPlatform } from "types";

export const FeaturedGames: React.FunctionComponent = () => {
  const { products, isLoading, error } = useFeatured();

  return (
    <Container>
      <OverflowContainer>
        {isLoading ? (
          <Loading />
        ) : !error && products && products.length !== 0 ? (
          products.map((productPlatform: ProductPlatform, index: number) => (
            <SmallProductCard
              key={productPlatform.product_platform_id}
              style={{ marginLeft: index === 0 ? "0rem" : "2rem" }}
              productPlatform={productPlatform}
            />
          ))
        ) : (
          <Error />
        )}
      </OverflowContainer>
    </Container>
  );
};
