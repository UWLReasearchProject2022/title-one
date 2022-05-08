import React from "react";
import {
  PageTemplate,
  BasketTable,
  SearchBar,
  CheckoutOptions,
} from "components";
import { Container } from "./Basket.styles";

export const Basket: React.FunctionComponent = () => {
  return (
    <PageTemplate>
      <SearchBar backTo="/search" backPage="search" />
      <Container>
        <BasketTable />
        <CheckoutOptions />
      </Container>
    </PageTemplate>
  );
};
