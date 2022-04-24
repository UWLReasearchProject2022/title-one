import React from "react";
import { Container } from "./FeaturedGames.styles";
import { Loading, Error } from "components";
import { useFeatured } from "queries";

export const FeaturedGames: React.FunctionComponent = () => {
  const { products, isLoading, error } = useFeatured();
  console.log(products);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : !error && products && products.length !== 0 ? (
        <Loading />
      ) : (
        <Error />
      )}
    </Container>
  );
};
