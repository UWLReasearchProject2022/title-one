import React from "react";
import { Container } from "./ProductGrid.styles";
import { useProducts } from "queries";
import { ProductCard, Loading, Error } from "components";
import Fuse from "fuse.js";
import { productSort, getSortAlgorithm } from "utils/sorting";
import { ProductSortAlgorithm, Filter } from "types";
import { filterProducts } from "utils/filter";

type Props = {
  query: string;
  sortBy: string;
  filter: Filter;
};
// this component will either be passed the filtering props or get it from context
export const ProductGrid: React.FunctionComponent<Props> = ({
  query,
  sortBy,
  filter,
}) => {
  const { products, isLoading, error } = useProducts();

  const options = {
    keys: ["product.name", "product.description", "product.developer"],
  };

  const fuse = products && new Fuse(products, options);

  const searchSort = () => {
    const filteredProducts = products && filterProducts(products, filter);
    if (query === "" || !fuse) {
      return filteredProducts?.sort(
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
        searchSort()?.map((productPlatform) => (
          <ProductCard
            key={productPlatform.product_platform_id}
            productPlatform={productPlatform}
          />
        ))}
    </Container>
  );
};
