import React from "react";
import { Container } from "./ProductGrid.styles";
import { useProducts } from "queries";
import { ProductCard, Loading, Error } from "components";
import Fuse from "fuse.js";
import { productSort, getSortAlgorithm } from "utils/sorting";
import { ProductSortAlgorithm } from "types";

type Props = {
  query: string;
  sortBy: string;
};

// this component will either be passed the filtering props or get it from context
export const ProductGrid: React.FunctionComponent<Props> = ({
  query,
  sortBy,
}) => {
  const { products, isLoading, error } = useProducts();

  const options = {
    keys: ["name", "description"],
  };

  const fuse = products && new Fuse(products, options);

  const searchSort = () => {
    if (query === "" || !fuse) {
      return products?.sort(
        getSortAlgorithm(productSort, sortBy) as ProductSortAlgorithm,
      );
    }
    return fuse.search(query).map((result) => result.item);
  };

  return (
    <Container>
      {isLoading && <Loading />}
      {error && <Error />}
      {products &&
        searchSort()?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Container>
  );
};
