import React from "react";
import { TabComponentProps } from "types";

export const DeliveryAndReturns: React.FunctionComponent<TabComponentProps> = ({
  product,
}) => {
  return (
    <>
      <div>{product.name}</div>
    </>
  );
};
