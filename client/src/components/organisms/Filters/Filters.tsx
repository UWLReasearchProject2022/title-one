import { ClearFilters } from "components/atoms";
import { Container, TopBar, Title, Apply, Divider } from "./Filters.styles";

export const Filters: React.FunctionComponent = () => {
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
    </Container>
  );
};
