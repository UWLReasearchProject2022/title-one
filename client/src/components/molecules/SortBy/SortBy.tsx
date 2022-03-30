import { Container, Label, Dropdown, DropdownItem } from "./SortBy.styles";
import { SortBy as SortByType } from "types";

type Props = {
  setSortBy: (_: SortByType) => void;
  sortBy: SortByType;
};

export const SortBy: React.FunctionComponent<Props> = ({
  sortBy,
  setSortBy,
}) => {
  return (
    <Container>
      <Label color="primary">Sort by</Label>
      <Dropdown
        select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortByType)}
        size="small"
        InputProps={{
          style: {
            height: "2rem",
            fontSize: "14px",
          },
        }}
      >
        <DropdownItem value="price-asc">Price (Low to High)</DropdownItem>
        <DropdownItem value="price-desc">Price (High to Low)</DropdownItem>
        <DropdownItem value="name-asc">Name (A to Z)</DropdownItem>
      </Dropdown>
    </Container>
  );
};
