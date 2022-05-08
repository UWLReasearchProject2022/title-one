import { Product } from "types";

export type BasketItem = {
  product: Product;
  quantity: number;
};

export type DeliveryOption = {
  key: string;
  text: string;
  price: number;
  dayOfSet: number;
};
