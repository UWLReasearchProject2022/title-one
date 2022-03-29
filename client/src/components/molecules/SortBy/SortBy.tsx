import { MenuItem, TextField } from "@mui/material";
import { Container, Label } from "./SortBy.styles";
import { SortBy as SortByType } from "types";
type Props = {
  // eslint-disable-next-line no-unused-vars
  setSortBy: (sortBy: SortByType) => void;
  sortBy: SortByType;
};

export const SortBy = ({ sortBy, setSortBy }: Props) => {
  return (
    <Container>
      <Label color="primary">Sort by</Label>
      <TextField
        select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortByType)}
        size="small"
      >
        <MenuItem value="price-asc">Price (Low to High)</MenuItem>
        <MenuItem value="price-desc">Price (High to Low)</MenuItem>
        <MenuItem value="name-asc">Name</MenuItem>
      </TextField>
    </Container>
  );
};
