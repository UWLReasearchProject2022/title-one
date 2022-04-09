import { Product } from "types";

export const sortAlgorithms = {
  "price-asc": (a: Product, b: Product) => a.price - b.price,
  "price-desc": (a: Product, b: Product) => b.price - a.price,
  "name-asc": (a: Product, b: Product) => a.name.localeCompare(b.name),
};
