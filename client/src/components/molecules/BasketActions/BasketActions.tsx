import React from "react";
import {
  Container,
  GoToCheckout,
  ContinueShopping,
} from "./BasketActions.styles";
import { useNavigate } from "react-router-dom";

export const BasketActions: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContinueShopping variant="contained" color="secondary">
        Continue shopping
      </ContinueShopping>
      <GoToCheckout
        variant="contained"
        color="secondary"
        onClick={() => navigate("/checkout")}
      >
        Go to checkout
      </GoToCheckout>
    </Container>
  );
};
