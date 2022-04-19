import React, { Dispatch, SetStateAction } from "react";
import { Product } from "types";

export type TabComponentProps = {
  product: Product;
  reviewsSortBy: string;
  reviewsSetSortBy: Dispatch<SetStateAction<string>>;
  textExpanded: boolean;
  setTextExpanded: Dispatch<SetStateAction<boolean>>;
};

export type Tab = {
  name: string;
  key: string;
  component: React.FunctionComponent<TabComponentProps>;
};
