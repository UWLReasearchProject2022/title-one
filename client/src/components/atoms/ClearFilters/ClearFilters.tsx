import { ClearButton } from "./ClearFilters.styles";
import { Filter } from "types";

type Props = {
  filterCount: number;
  setFilter: (_: Filter) => void;
};

export const ClearFilters: React.FunctionComponent<Props> = ({
  filterCount,
  setFilter,
}: Props) => {
  const onClick = () => {
    setFilter({
      active: false,
      platform: [],
      price: {
        min: 0,
        max: 100,
      },
    });
  };
  return (
    <ClearButton onClick={onClick}>Clear filters ({filterCount})</ClearButton>
  );
};
