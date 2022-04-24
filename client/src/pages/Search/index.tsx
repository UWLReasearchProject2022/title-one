import React, { useState } from "react";

import { PageTemplate, ProductGrid, SearchBar, Filters } from "components";
import type { SortBy, Filter } from "types";
import { MainContent } from "./Search.styles";
import { productSort } from "utils/sorting";

export const Search: React.FunctionComponent = () => {
  const [sortBy, setSortBy] = useState<string>(productSort[0].key);
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<Filter>({
    active: false,
    platform: [],
    price: {
      min: 0,
      max: 100,
    },
  });
  return (
    <PageTemplate>
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        query={query}
        setQuery={setQuery}
        backTo="/"
        backPage="home"
      />
      <MainContent>
        <Filters filter={filter} setFilter={setFilter} />
        <ProductGrid query={query} sortBy={sortBy} filter={filter} />
      </MainContent>
    </PageTemplate>
  );
};
