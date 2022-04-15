import React, { useState } from "react";
import {
  Container,
  StyledTabs,
  StyledTab,
  TabContainer,
} from "./DetailTabs.styles";
import { Divider } from "@mui/material";
import { Product, Tab } from "types";

type Props = {
  tabs: Tab[];
  product: Product;
};

export const DetailTabs: React.FunctionComponent<Props> = ({
  tabs,
  product,
}) => {
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
          {value === tab.key && <tab.component product={product} />}
        </TabContainer>
      ))}
    </Container>
  );
};
