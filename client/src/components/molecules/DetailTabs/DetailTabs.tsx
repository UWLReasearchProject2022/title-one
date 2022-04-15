import React, { useState } from "react";
import { Container, StyledTabs, StyledTab } from "./DetailTabs.styles";
import { Divider } from "@mui/material";
import { TabPanel } from "components";

export const DetailTabs: React.FunctionComponent = () => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="Product information" value={1} />
        <StyledTab label="Customer reviews" value={2} />
        <StyledTab label="Delivery & Returns" value={3} />
      </StyledTabs>
      <Divider />
      <TabPanel index={1} value={value}>
        Item One
      </TabPanel>
      <TabPanel index={2} value={value}>
        Item Two
      </TabPanel>
      <TabPanel index={3} value={value}>
        Item Three
      </TabPanel>
    </Container>
  );
};
