import { MenuItem, TextField } from "@mui/material";
import { Container, Label } from "./SortBy.styles";

type Props = {
  // eslint-disable-next-line no-unused-vars
  setSortBy: (sortBy: string) => void;
  sortBy: string;
};

export const SortBy = ({ sortBy, setSortBy }: Props) => {
  return (
    <Container>
      <Label color="primary">Sort by</Label>
      <TextField
        select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as string)}
        size="small"
      >
        <MenuItem value="price">Price (Low to High)</MenuItem>
        <MenuItem value="price-desc">Price (High to Low)</MenuItem>
        <MenuItem value="name">Name</MenuItem>
      </TextField>
    </Container>
  );
};
