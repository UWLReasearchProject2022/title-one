import React, { Dispatch, SetStateAction } from "react";
import { Banner, Container, SearchField } from "./SearchBar.styles";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SortBy, StepBack } from "components";
import { productSort } from "utils/sorting";

type Props = {
  query?: string;
  sortBy?: string;
  setSortBy?: Dispatch<SetStateAction<string>>;
  setQuery?: Dispatch<SetStateAction<string>>;
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
        {setQuery && (
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
        )}
        {sortBy && setSortBy && (
          <SortBy sorts={productSort} sortBy={sortBy} setSortBy={setSortBy} />
        )}
      </Container>
    </Banner>
  );
};
