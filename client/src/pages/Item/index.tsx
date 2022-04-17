import React from "react";
import {
  PageTemplate,
  SearchBar,
  Loading,
  Error,
  LargeProductCard,
  AddToBasket,
  DetailTabs,
  ProductInformation,
  CustomerReviews,
  DeliveryAndReturns,
} from "components";
import { useParams } from "react-router-dom";
import { useProduct } from "queries/useProduct";
import { Container } from "./Item.styles";
import { Tab } from "types";

const detailsTabs: Tab[] = [
  {
    name: "Product information",
    key: "product-information",
    component: ProductInformation,
  },
  {
    name: "Customer reviews",
    key: "customer-reviews",
    component: CustomerReviews,
  },
  {
    name: "Delivery & Returns",
    key: "deliver-and-returns",
    component: DeliveryAndReturns,
  },
];

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
        <>
          <Container>
            <LargeProductCard product={product} />
            <AddToBasket />
          </Container>
          <DetailTabs product={product} tabs={detailsTabs} />
        </>
      ) : (
        <Error message="Item not found" />
      )}
    </PageTemplate>
  );
};
