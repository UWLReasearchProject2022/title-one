import { Filter, ProductPlatform } from "types";

export const filterProducts = (items: ProductPlatform[], filter: Filter) => {
  return items
    .filter((item) => {
      if (filter.platform.length === 0) return true;
      if (filter.platform.includes(item.platform.name)) return true;
      return false;
    })
    .filter((item) => {
      if (filter.price.min === 0 && filter.price.max === 0) return true;
      if (filter.price.min <= item.price && filter.price.max >= item.price)
        return true;
      return false;
    })
    .filter((item) => {
      if (filter.ageRating.length === 0) return true;
      if (filter.ageRating.includes(item.product.age_rating)) return true;
      return false;
    })
    .filter((item) => {
      if (filter.category.length === 0) return true;
      if (filter.category.includes(item.product.category)) return true;
      return false;
    });
};
