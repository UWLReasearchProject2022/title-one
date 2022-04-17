import React from "react";
import { TabComponentProps } from "types";

export const CustomerReviews: React.FunctionComponent<TabComponentProps> = ({
  product,
}) => {
  return <div>{product.name}</div>;
};
