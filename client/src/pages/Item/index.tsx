import React from "react";
import { PageTemplate, SearchBar } from "components";

export const Item: React.FunctionComponent = () => {
  return (
    <PageTemplate>
      <SearchBar backTo="/search" backPage="search" />
    </PageTemplate>
  );
};
