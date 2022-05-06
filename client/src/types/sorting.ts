import { Product, Review } from "types";

export type ProductSortAlgorithm = (_: Product, __: Product) => number;

export type ReviewSortAlgorithm = (_: Review, __: Review) => number;

export type Sort = {
  key: string;
  name: string;
  algorithm: ProductSortAlgorithm | ReviewSortAlgorithm;
};
