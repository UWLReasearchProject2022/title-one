import { StripeElementsOptions } from "@stripe/stripe-js";

export const getToken = async (setClientSecret: (_: string) => void) => {
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

export const getOptions = (clientSecret: string): StripeElementsOptions => {
  return {
    clientSecret: clientSecret,
    appearance: {
      theme: "night",
      variables: {
        colorBackground: "#111111",
      },
    },
  };
};
