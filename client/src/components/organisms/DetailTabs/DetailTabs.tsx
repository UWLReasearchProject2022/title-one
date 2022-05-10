import React, { useState } from "react";
import {
  Container,
  StyledTabs,
  StyledTab,
  TabContainer,
} from "./DetailTabs.styles";
import { Divider } from "@mui/material";
import { ProductPlatform, Tab } from "types";
import { reviewSort } from "utils/sorting";

type Props = {
  tabs: Tab[];
  productPlatform: ProductPlatform;
};

export const DetailTabs: React.FunctionComponent<Props> = ({
  tabs,
  productPlatform,
}) => {
  const initialValue = tabs[0].key;
  const [value, setValue] = useState<string>(initialValue);
  const [reviewsSortBy, reviewsSetSortBy] = useState<string>(reviewSort[0].key);
  const [textExpanded, setTextExpanded] = useState<boolean>(false);

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
          {value === tab.key && (
            <tab.component
              productPlatform={productPlatform}
              reviewsSortBy={reviewsSortBy}
              reviewsSetSortBy={reviewsSetSortBy}
              textExpanded={textExpanded}
              setTextExpanded={setTextExpanded}
            />
          )}
        </TabContainer>
      ))}
    </Container>
  );
};
