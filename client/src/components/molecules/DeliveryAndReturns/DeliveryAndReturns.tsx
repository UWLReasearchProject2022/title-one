import React from "react";
import { Placeholder } from "components";
import { TabComponentProps } from "types";

export const DeliveryAndReturns: React.FunctionComponent<
  TabComponentProps
> = () => {
  return (
    <div style={{ minHeight: "20rem" }}>
      <Placeholder>{"Delivery information is coming soon!"}</Placeholder>
    </div>
  );
};
