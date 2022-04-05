import React from "react";
import { Typography } from "@mui/material";
import { Container } from "./ProductGrid.styles";
import { useProducts } from "queries";
import { ProductCard } from "components";
import Fuse from "fuse.js";
import { sortAlgorithms } from "utils/sortAlgorithms";
import { filterProducts } from "utils/filter";
import { SortBy, Filter } from "types";

type Props = {
  query: string;
  sortBy: SortBy;
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
    keys: ["name", "description"],
  };

  const fuse = products && new Fuse(products, options);

  const searchSort = () => {
    const filteredProducts = products && filterProducts(products, filter);
    if (query === "" || !fuse) {
      return filteredProducts?.sort(sortAlgorithms[sortBy]);
    }
    return fuse.search(query).map((result) => result.item);
  };

  return (
    <Container>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>Error!</Typography>}
      {products &&
        searchSort()?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Container>
  );
};
