import { Banner, Container, BackIcon, SearchField } from "./SearchBar.style";
import { InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SortBy } from "components";

type Props = {
  query: string;
  sortBy: string;
  // eslint-disable-next-line no-unused-vars
  setSortBy: (sortBy: string) => void;
  // eslint-disable-next-line no-unused-vars
  setQuery: (query: string) => void;
};

export const SearchBar = ({ sortBy, setSortBy, query, setQuery }: Props) => {
  return (
    <Banner>
      <Container>
        <Button>
          <BackIcon />
          Back to Home
        </Button>
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
