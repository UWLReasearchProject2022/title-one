import { ProductPlatform, Review, Sort } from "types";
import { parseDate } from "utils/helpers";

export const getSortAlgorithm = (sorts: Sort[], key: string) => {
  for (let i = 0; i < sorts.length; i++) {
    const sort = sorts[i];
    if (sort.key === key) return sort.algorithm;
  }
};

export const productSort: Sort[] = [
  {
    key: "price-asc",
    name: "Price (Low to High)",
    algorithm: (a: ProductPlatform, b: ProductPlatform) => a.price - b.price,
  },
  {
    key: "price-desc",
    name: "Price (High to Low)",
    algorithm: (a: ProductPlatform, b: ProductPlatform) => b.price - a.price,
  },
  {
    key: "name-asc",
    name: "Name (A to Z)",
    algorithm: (a: ProductPlatform, b: ProductPlatform) =>
      a.product.name.localeCompare(b.product.name),
  },
];

export const reviewSort: Sort[] = [
  {
    key: "rating-asc",
    name: "Rating (Low to High)",
    algorithm: (a: Review, b: Review) => a.ratings.overall - b.ratings.overall,
  },
  {
    key: "rating-desc",
    name: "Rating (High to Low)",
    algorithm: (a: Review, b: Review) => b.ratings.overall - a.ratings.overall,
  },
  {
    key: "date-asc",
    name: "Date (Old to New)",
    algorithm: (a: Review, b: Review) =>
      parseDate(a.date_reviewed).getTime() -
      parseDate(b.date_reviewed).getTime(),
  },
  {
    key: "date-desc",
    name: "Date (New to Old)",
    algorithm: (a: Review, b: Review) =>
      parseDate(b.date_reviewed).getTime() -
      parseDate(a.date_reviewed).getTime(),
  },
];
