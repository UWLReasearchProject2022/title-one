import React, { useState } from "react";
import { PageTemplate, ProductGrid, SearchBar } from "components";
import { productSort } from "utils/sorting";

export const Search: React.FunctionComponent = () => {
  const [sortBy, setSortBy] = useState<string>(productSort[0].key);
  const [query, setQuery] = useState<string>("");
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
      <ProductGrid query={query} sortBy={sortBy} />
    </PageTemplate>
  );
};
