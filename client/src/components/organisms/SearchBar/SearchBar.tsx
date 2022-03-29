import { Banner, Container, SearchField } from "./SearchBar.style";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SortBy } from "components";
import { SortBy as SortByType } from "types";

type Props = {
  query: string;
  sortBy: SortByType;
  // eslint-disable-next-line no-unused-vars
  setSortBy: (sortBy: SortByType) => void;
  // eslint-disable-next-line no-unused-vars
  setQuery: (query: string) => void;
};

export const SearchBar = ({ sortBy, setSortBy, query, setQuery }: Props) => {
  return (
    <Banner>
      <Container>
        <SearchField
          placeholder="Have something in mind?"
          size="small"
          value={query}
          onChange={(e) => setQuery(e.target.value as string)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </Container>
    </Banner>
  );
};
