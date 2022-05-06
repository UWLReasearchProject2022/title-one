import { useQuery } from "react-query";
import { Review } from "types";

export const useReviews = (product_id: number) => {
  const { data, isLoading, error } = useQuery<Review[], Error>(
    `reviews_for_product_${product_id}`,
    () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/reviews?product_id=${product_id}`,
      ).then((res) => res.json()),
  );
  return {
    reviews: data,
    isLoading,
    error,
  };
};
