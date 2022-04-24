import { useState } from "react";
import { BasketItem, Product } from "types";

export const useBasket = () => {
  const [basket, setBasket] = useState<BasketItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      // Get from local storage by key "basket"
      const item = window.localStorage.getItem("basket");
      // Parse stored json or if none return an empty array
      return item ? JSON.parse(item) : [];
    } catch (error) {
      // If error also return an empty array
      console.log(error);
      return [];
    }
  });

  const addToBasket = (product: Product) => {
    try {
      const newBasket = [...basket];
      const item = newBasket.find((item) => item.product.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        newBasket.push({ product, quantity: 1 });
      }
      // Save state
      setBasket(newBasket);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem("basket", JSON.stringify(newBasket));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromBasket = (productId: number) => {
    try {
      const newBasket = basket.filter((item) => item.product.id !== productId);
      setBasket(newBasket);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("basket", JSON.stringify(newBasket));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const total = basket.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return { basket, total, addToBasket, removeFromBasket };
};
