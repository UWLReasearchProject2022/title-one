import { ProductPlatform, Review } from "types";

export type ProductSortAlgorithm = (
  _: ProductPlatform,
  __: ProductPlatform,
) => number;

export type ReviewSortAlgorithm = (_: Review, __: Review) => number;

export type Sort = {
  key: string;
  name: string;
  algorithm: ProductSortAlgorithm | ReviewSortAlgorithm;
};
