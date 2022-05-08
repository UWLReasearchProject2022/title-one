import { getBasket } from "./getBasket";
import { Product } from "types";

export const addToBasket = (product: Product) => {
  const basket = getBasket();
  // if item does not exist in basket, add it, else increase quantity
  const item = basket.find((item) => item.product.id === product.id);
  if (item) {
    item.quantity++;
  } else {
    basket.push({ product, quantity: 1 });
  }
  localStorage.setItem("basket", JSON.stringify(basket));
  return basket;
};
