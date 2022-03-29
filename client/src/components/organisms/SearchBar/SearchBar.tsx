import { Banner, Container, SearchField } from "./SearchBar.styles";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SortBy, StepBack } from "components";
import { SortBy as SortByType } from "types";

type Props = {
  query: string;
  sortBy: SortByType;
  setSortBy: (_: SortByType) => void;
  setQuery: (_: string) => void;
  backTo: string;
  backPage: string;
};

export const SearchBar: React.FunctionComponent<Props> = ({
  sortBy,
  setSortBy,
  query,
  setQuery,
  backTo,
  backPage,
}) => {
  return (
    <Banner>
      <Container>
        <StepBack to={backTo} page={backPage} />
        <SearchField
          placeholder="Have something in mind?"
          size="small"
          value={query}
          onChange={(e) => setQuery(e.target.value as string)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" fontSize="small" />
              </InputAdornment>
            ),
            style: {
              height: "2rem",
              fontSize: "14px",
            },
          }}
        />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </Container>
    </Banner>
  );
};
