import { ClearButton } from "./ClearFilters.styles";
import { Filter } from "types";
import { filterState } from "utils/initialStates";

type Props = {
  filterCount: number;
  setFilter: (_: Filter) => void;
};

export const ClearFilters: React.FunctionComponent<Props> = ({
  filterCount,
  setFilter,
}: Props) => {
  const onClick = () => {
    setFilter(filterState);
  };
  return (
    <ClearButton onClick={onClick}>Clear filters ({filterCount})</ClearButton>
  );
};
