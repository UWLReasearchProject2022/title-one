import React from "react";
import { TabComponentProps } from "types";

export const DeliveryAndReturns: React.FunctionComponent<TabComponentProps> = ({
  productPlatform,
}) => {
  return (
    <>
      <div>{productPlatform.product.name}</div>
    </>
  );
};
