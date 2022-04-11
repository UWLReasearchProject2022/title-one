import React from "react";
import { Typography } from "@mui/material";
import { Container } from "./ProductGrid.styles";
import { useProducts } from "queries";
import { ProductCard, Loading } from "components";
import Fuse from "fuse.js";
import { sortAlgorithms } from "utils/sortAlgorithms";
import { SortBy } from "types";

type Props = {
  query: string;
  sortBy: SortBy;
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
      return products?.sort(sortAlgorithms[sortBy]);
    }
    return fuse.search(query).map((result) => result.item);
  };

  return (
    <Container>
      {isLoading && <Loading />}
      {error && <Typography>Error!</Typography>}
      {products &&
        searchSort()?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Container>
  );
};
