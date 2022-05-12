import { DeliveryOption } from "types";

export const parseDate = (dateString: string): Date => {
  if (dateString.length !== 10) return new Date();
  const [dd, mm, yyyy] = dateString.split("/");
  return new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
};

export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const isBlank = (str: string) => {
  return str.replaceAll(" ", "") === "";
};

export const getDeliveryFromKey = (
  key: string,
  options: DeliveryOption[],
): DeliveryOption | undefined => {
  let deliveryOption;
  options.some((option) => {
    if (option.key === key) {
      deliveryOption = option;
      return true;
    }
    return false;
  });
  return deliveryOption;
};
