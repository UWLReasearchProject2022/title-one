import React from "react";
import { Container, OverflowContainer } from "./FeaturedGames.styles";
import { Loading, Error, SmallProductCard } from "components";
import { useFeatured } from "queries";

export const FeaturedGames: React.FunctionComponent = () => {
  const { products, isLoading, error } = useFeatured();

  return (
    <Container>
      <OverflowContainer>
        {isLoading ? (
          <Loading />
        ) : !error && products && products.length !== 0 ? (
          products.map((product, index) => (
            <SmallProductCard
              key={product.id}
              style={{ marginLeft: index === 0 ? "0rem" : "2rem" }}
              product={product}
            />
          ))
        ) : (
          <Error />
        )}
      </OverflowContainer>
    </Container>
  );
};
