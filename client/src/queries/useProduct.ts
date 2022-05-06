import { useQuery } from "react-query";
import { Product } from "types";

export const useProduct = (id: number) => {
  const { data, isLoading, error } = useQuery<Product, Error>(
    `product_${id}`,
    () =>
      fetch(`${process.env.REACT_APP_API_URL}/products/${id}`).then((res) =>
        res.json(),
      ),
  );
  return {
    product: data,
    isLoading,
    error,
  };
};
