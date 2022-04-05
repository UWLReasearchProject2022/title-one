import { useState } from "react";
import { ClearFilters } from "components/atoms";
import { PriceFilter } from "components/molecules";
import { Container, TopBar, Title, Apply, Divider } from "./Filters.styles";

export const Filters: React.FunctionComponent = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  return (
    <Container>
      <TopBar>
        <Title>Filters</Title>
        <Apply variant="contained" size="small" color="secondary">
          Apply
        </Apply>
        <ClearFilters filterCount={2} />
      </TopBar>
      <Divider />
      <PriceFilter setPriceRange={setPriceRange} priceRange={priceRange} />
    </Container>
  );
};
