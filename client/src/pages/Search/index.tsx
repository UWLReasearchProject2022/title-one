import React, { useState } from "react";
import { PageTemplate, ProductGrid, SearchBar } from "components";

export const Search: React.FunctionComponent = () => {
  const [sortBy, setSortBy] = useState<string>("price-asc");
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
