import React, { useEffect, useState } from "react";

import { PageTemplate, ProductGrid, SearchBar, Filters } from "components";
import { Filter, Category, Platform } from "types";
import { MainContent } from "./Search.styles";
import { productSort } from "utils/sorting";
import { filterState } from "utils/initialStates";
import { useSearchParams } from "react-router-dom";

export const Search: React.FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [sortBy, setSortBy] = useState<string>(productSort[0].key);
  const [query, setQuery] = useState<string>(searchQuery || "");
  const [filter, setFilter] = useState<Filter>(filterState);

  useEffect(() => {
    const category = searchParams.get("category");
    console.log(category);
    const platform = searchParams.get("platform");
    setFilter({
      ...filterState,
      category: category ? [category as Category] : [],
      platform: platform ? [platform as Platform] : [],
    });
  }, [searchParams]);

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
