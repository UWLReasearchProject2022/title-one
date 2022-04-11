import React from "react";
import {
  PageTemplate,
  SearchBar,
  Loading,
  Error,
  LargeProductCard,
  AddToBasket,
} from "components";
import { useParams } from "react-router-dom";
import { useProduct } from "queries/useProduct";
import { Container } from "./Item.styles";

export const Item: React.FunctionComponent = () => {
  const params = useParams();
  if (!params.product_id) return <Error message="Item not specified" />;

  const product_id = parseInt(params.product_id);
  const { product, isLoading, error } = useProduct(product_id);

  return (
    <PageTemplate>
      <SearchBar backTo="/search" backPage="search" />
      {isLoading ? (
        <Loading />
      ) : product && Object.keys(product).length !== 0 && !error ? (
        <Container>
          <LargeProductCard product={product} />
          <AddToBasket />
        </Container>
      ) : (
        <Error message="Item not found" />
      )}
    </PageTemplate>
  );
};
