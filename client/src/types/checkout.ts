import { DeliveryOption } from "types";

export type CheckoutInputs = {
  surname: string;
  other_names: string;
  email: string;
  phone: string;
  address: string;
  city: string;
};

export type OrderDetails = {
  product_platform_id: number;
  quantity: number;
};

export type MakeOrder = {
  user_id?: number;
  order_details: OrderDetails[];
  deliveryOption: DeliveryOption;
};
