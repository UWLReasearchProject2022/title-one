import React, { useEffect, useState } from "react";
import {
  PageTemplate,
  CheckoutForm,
  OrderSummary,
  SearchBar,
} from "components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Container } from "./Checkout.styles";
import { getToken, getOptions } from "utils/stripeConfig";
import { useMakeOrder } from "mutations";
import { useBasket } from "utils/lib/useBasket";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getDeliveryFromKey } from "utils/helpers";
import deliveryOptions from "utils/deliveryOptions";
import { User } from "types";

const stripePromise = loadStripe(
  "pk_test_51KvGbwCUMmacvvXbW7msn5BD98sj6P7L1rFMqijwnYuHGLaxBeaqiXGZbyJZdmCo2cqBl3LHEhxq0uTL0KohIkJs00UIP4j4lo",
);

export const Checkout: React.FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const deliveryQuery = searchParams.get("delivery");
  const deliveryQueryOption = deliveryQuery
    ? getDeliveryFromKey(deliveryQuery, deliveryOptions)
    : undefined;
  const deliveryOption = deliveryQueryOption
    ? deliveryQueryOption
    : deliveryOptions[1];
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const navigate = useNavigate();
  const makeOrderMutation = useMakeOrder();
  const { basket, total, clearBasket } = useBasket();

  const submitForm = (formUser: User) => {
    makeOrderMutation.mutate({
      user_id: formUser?.id,
      order_details: basket.map((item) => ({
        product_platform_id: item.product.id,
        quantity: item.quantity,
      })),
      deliveryOption: deliveryOption,
    });
    clearBasket();
    navigate("/order-placed");
  };

  useEffect(() => {
    getToken(setClientSecret);
  }, []);

  return (
    <PageTemplate>
      <SearchBar backTo="/basket" backPage="Basket" />
      <Container>
        {clientSecret && (
          <Elements stripe={stripePromise} options={getOptions(clientSecret)}>
            <CheckoutForm submitForm={submitForm} />
          </Elements>
        )}
        <OrderSummary
          basket={basket}
          total={total}
          deliveryOption={deliveryOption}
        />
      </Container>
    </PageTemplate>
  );
};
