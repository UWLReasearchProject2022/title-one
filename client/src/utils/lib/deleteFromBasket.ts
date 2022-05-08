import { BasketItem, Product } from "types";

export const deleteFromBasket = (product: Product) => {
  const basket = JSON.parse(localStorage.getItem("basket") || "[]");
  const item = basket.find(
    (item: BasketItem) => item.product.id === product.id,
  );
  const filtered = basket.filter(
    (filterItem: BasketItem) => item.product.id !== filterItem.product.id,
  );
  localStorage.setItem("basket", JSON.stringify(filtered));
};
