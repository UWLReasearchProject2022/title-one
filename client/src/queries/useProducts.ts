import { useQuery } from "react-query";
import { ProductPlatform } from "types";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery<ProductPlatform[], Error>(
    "products",
    () =>
      fetch(`${process.env.REACT_APP_API_URL}/product_platform`).then((res) =>
        res.json(),
      ),
  );
  return {
    products: data,
    isLoading,
    error,
  };
};
