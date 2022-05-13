import { ProductPlatform } from "types";

export type BasketItem = {
  productPlatform: ProductPlatform;
  quantity: number;
};

export type DeliveryOption = {
  key: string;
  text: string;
  price: number;
  dayOfSet: number;
};
