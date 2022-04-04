import { ClearButton } from "./ClearFilters.styles";

type Props = {
  filterCount: number;
};

export const ClearFilters: React.FunctionComponent<Props> = ({
  filterCount,
}: Props) => {
  return <ClearButton>Clear filters ({filterCount})</ClearButton>;
};
