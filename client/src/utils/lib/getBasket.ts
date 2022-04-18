import type { BasketItem } from "types";
export const getBasket = (): BasketItem[] => {
  const basket = JSON.parse(localStorage.getItem("basket") || "[]");
  return basket;
};
