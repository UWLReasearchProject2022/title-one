import React, { useEffect, useState } from "react";
import { PageTemplate } from "components";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KvGbwCUMmacvvXbW7msn5BD98sj6P7L1rFMqijwnYuHGLaxBeaqiXGZbyJZdmCo2cqBl3LHEhxq0uTL0KohIkJs00UIP4j4lo",
);

export const Checkout: React.FunctionComponent = () => {
  const [clientSecret, setClientSecret] = useState<string | undefined>();

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch("https://api.stripe.com/v1/payment_intents", {
        body: "amount=1099&currency=eur&automatic_payment_methods[enabled]=true",
        headers: {
          Authorization:
            "Bearer sk_test_51KvGbwCUMmacvvXbd7DZd9GAI36d8Lcq3FK3Erppqb9mWJsuOjMbAMciDJe63OiwH2cFv200Zra36TV0pWlVyvhq00lTcqV0sY",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      });
      const data = await res.json();
      setClientSecret(data.client_secret);
    };
    getToken();
  }, []);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  return (
    <PageTemplate>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentElement />
        </Elements>
      )}
    </PageTemplate>
  );
};
