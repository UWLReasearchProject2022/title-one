import { useMutation } from "react-query";
import { MakeOrder } from "types";
// react query mutation to post a new order to /order with the order payload
export const useMakeOrder = () => {
  const mutation = useMutation<unknown, unknown, MakeOrder>(
    async (order) => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/order/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      return await response.json();
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );
  return mutation;
};
