import React from "react";
import { Typography } from "@mui/material";
import { Container } from "./ProductGrid.styles";
import { useProducts } from "queries";
import { ProductCard } from "components";

// this component will either be passed the filtering props or get it from context
export const ProductGrid = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <Container>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>Error!</Typography>}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Container>
  );
};
