import React from "react";
import { Product } from "./product";

export type TabComponentProps = {
  product: Product;
};

export type Tab = {
  name: string;
  key: string;
  component: React.FunctionComponent<TabComponentProps>;
};
