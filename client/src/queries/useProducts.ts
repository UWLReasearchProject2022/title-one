import { useQuery } from "react-query";
import { Product } from "types";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>(
    "products",
    () => fetch("http://localhost:4000/api/products").then((res) => res.json()),
  );
  return {
    products: data,
    isLoading,
    error,
  };
};
