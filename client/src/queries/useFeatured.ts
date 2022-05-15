import { useQuery } from "react-query";
import { ProductPlatform } from "types";

export const useFeatured = () => {
  const { data, isLoading, error } = useQuery<ProductPlatform[], Error>(
    "featured",
    () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/product_platform?is_featured=True`,
      ).then((res) => res.json()),
  );
  return {
    products: data,
    isLoading,
    error,
  };
};
