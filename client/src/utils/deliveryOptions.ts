import { DeliveryOption } from "types";

const deliveryOptions: DeliveryOption[] = [
  { key: "next_day", text: "Next day (DPD)", price: 5.25, dayOfSet: 1 },
  {
    key: "first_class",
    text: "First class (Royal mail)",
    price: 3.15,
    dayOfSet: 3,
  },
  {
    key: "Second class",
    text: "Second class (Royal mail)",
    price: 1.49,
    dayOfSet: 5,
  },
];

export default deliveryOptions;
