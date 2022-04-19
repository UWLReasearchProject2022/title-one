import React, { Dispatch, SetStateAction } from "react";
import { Container, Label, Dropdown, DropdownItem } from "./SortBy.styles";
import { Sort } from "types";

type Props = {
  sorts: Sort[];
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export const SortBy: React.FunctionComponent<Props> = ({
  sorts,
  sortBy,
  setSortBy,
}) => {
  return (
    <Container>
      <Label color="primary">Sort by</Label>
      <Dropdown
        select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        size="small"
        InputProps={{
          style: {
            height: "2rem",
            fontSize: "14px",
          },
        }}
      >
        {sorts.map((sort) => {
          return (
            <DropdownItem key={sort.key} value={sort.key}>
              {sort.name}
            </DropdownItem>
          );
        })}
      </Dropdown>
    </Container>
  );
};
