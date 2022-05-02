import React, { useState } from "react";
import { PageTemplate, BasketTable, BasketActions } from "components";
import { getBasket } from "utils/lib/getBasket";

export const Basket: React.FunctionComponent = () => {
  const [basket] = useState(getBasket());
  console.log(basket);
  return (
    <PageTemplate>
      <BasketTable />
      <BasketActions />
    </PageTemplate>
  );
};
