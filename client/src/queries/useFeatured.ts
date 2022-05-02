import { useQuery } from "react-query";
import { Product } from "types";

export const useFeatured = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>(
    "featured",
    () =>
      fetch(`${process.env.REACT_APP_API_URL}/api/products?featured=true`).then(
        (res) => res.json(),
      ),
  );
  return {
    products: data,
    isLoading,
    error,
  };
};
