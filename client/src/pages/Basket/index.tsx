import React from "react";
import {
  PageTemplate,
  BasketTable,
  SearchBar,
  CheckoutOptions,
} from "components";
import { Container } from "./Basket.styles";
import { useBasket } from "utils/lib/useBasket";

export const Basket: React.FunctionComponent = () => {
  const basket = useBasket();
  return (
    <PageTemplate>
      <SearchBar backTo="/search" backPage="search" />
      <Container>
        <BasketTable {...basket} />
        <CheckoutOptions basketTotal={basket.total} />
      </Container>
    </PageTemplate>
  );
};
