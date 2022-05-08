import React, { useEffect, useState } from "react";
import { PageTemplate, CheckoutForm, OrderSummary } from "components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Container } from "./Checkout.styles";
import { getToken, getOptions } from "utils/stripeConfig";
import { useMakeOrder } from "mutations";
import { useBasket } from "utils/lib/useBasket";

const stripePromise = loadStripe(
  "pk_test_51KvGbwCUMmacvvXbW7msn5BD98sj6P7L1rFMqijwnYuHGLaxBeaqiXGZbyJZdmCo2cqBl3LHEhxq0uTL0KohIkJs00UIP4j4lo",
);

export const Checkout: React.FunctionComponent = () => {
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const makeOrderMutation = useMakeOrder();
  const { basket, total } = useBasket();

  const submitForm = () => {
    makeOrderMutation.mutate({
      user_id: 1,
      order_details: basket.map((item) => ({
        product_platform_id: item.product.id,
        quantity: item.quantity,
      })),
    });
  };

  useEffect(() => {
    getToken(setClientSecret);
  }, []);

  return (
    <PageTemplate>
      <Container>
        {clientSecret && (
          <Elements stripe={stripePromise} options={getOptions(clientSecret)}>
            <CheckoutForm submitForm={submitForm} />
          </Elements>
        )}
        <OrderSummary basket={basket} total={total} />
      </Container>
    </PageTemplate>
  );
};
