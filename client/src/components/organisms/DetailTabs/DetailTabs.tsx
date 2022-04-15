import React, { useState } from "react";
import {
  Container,
  StyledTabs,
  StyledTab,
  TabContainer,
} from "./DetailTabs.styles";
import { Divider } from "@mui/material";

const tabs = [
  {
    name: "Product information",
    key: "product-information",
    component: <div>Test 1</div>,
  },
  {
    name: "Customer reviews",
    key: "customer-reviews",
    component: <div>Test 2</div>,
  },
  {
    name: "Delivery & Returns",
    key: "deliver-and-returns",
    component: <div>Test 3</div>,
  },
];

export const DetailTabs: React.FunctionComponent = () => {
  const initialValue = tabs[0].key;
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <StyledTabs value={value} onChange={handleChange}>
        {tabs.map((tab) => (
          <StyledTab key={tab.key} label={tab.name} value={tab.key} />
        ))}
      </StyledTabs>
      <Divider />
      {tabs.map((tab) => (
        <TabContainer
          key={tab.key}
          hidden={value !== tab.key}
          id={`tabpanel-${tab.key}`}
        >
          {value === tab.key && tab.component}
        </TabContainer>
      ))}
    </Container>
  );
};
