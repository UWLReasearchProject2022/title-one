import { useState } from "react";
import { BasketItem, ProductPlatform } from "types";

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

  const addToBasket = (productPlatform: ProductPlatform) => {
    try {
      const newBasket = [...basket];
      const item = newBasket.find(
        (item) =>
          item.productPlatform.product_platform_id ===
          productPlatform.product_platform_id,
      );
      if (item) {
        item.quantity++;
      } else {
        newBasket.push({ productPlatform, quantity: 1 });
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
      const newBasket = basket.filter(
        (item) => item.productPlatform.product_platform_id !== productId,
      );
      setBasket(newBasket);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("basket", JSON.stringify(newBasket));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearBasket = () => {
    try {
      const newBasket: BasketItem[] = [];
      setBasket(newBasket);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("basket", "[]");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setQuantity = (productId: number, quantity: number) => {
    try {
      const newBasket = basket.map((item) => {
        if (item.productPlatform.product_platform_id === productId) {
          item.quantity = quantity;
        }
        return item;
      });
      setBasket(newBasket);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("basket", JSON.stringify(newBasket));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const total = basket.reduce((total, item) => {
    return total + item.productPlatform.price * item.quantity;
  }, 0);

  return {
    basket,
    total,
    addToBasket,
    removeFromBasket,
    setQuantity,
    clearBasket,
  };
};
