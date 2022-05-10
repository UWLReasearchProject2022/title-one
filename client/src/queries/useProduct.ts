import { useQuery } from "react-query";
import { ProductPlatform } from "types";

export const useProduct = (id: number) => {
  const { data, isLoading, error } = useQuery<ProductPlatform, Error>(
    `product_${id}`,
    () =>
      fetch(`${process.env.REACT_APP_API_URL}/product_platform/${id}`).then(
        (res) => res.json(),
      ),
  );
  return {
    product: data,
    isLoading,
    error,
  };
};
