import { ClearFilters, FilterContainer, PriceField } from "components";
import {
  Container,
  TopBar,
  Title,
  StyledDivider,
  Separator,
  PriceWrapper,
  FormControl,
} from "./Filters.styles";
import { Platform, Filter, AgeRating } from "types";
import { Checkbox } from "@mui/material";

type Props = {
  filter: Filter;
  setFilter: (_: Filter) => void;
};

export const Filters: React.FunctionComponent<Props> = ({
  filter,
  setFilter,
}) => {
  const platforms: Platform[] = ["PC", "Playstation", "Xbox", "Nintendo"];
  const ageRatings: AgeRating[] = ["3+", "7+", "12+", "16+", "18+"];
  return (
    <Container>
      <TopBar>
        <Title>Filters</Title>
        <ClearFilters filterCount={2} setFilter={setFilter} />
      </TopBar>
      <StyledDivider />
      <FilterContainer label={"Price"}>
        <PriceWrapper>
          <PriceField
            value={filter.price.min}
            onChange={(min) =>
              setFilter({ ...filter, price: { ...filter.price, min } })
            }
            label="Min"
          />
          <Separator>to</Separator>
          <PriceField
            value={filter.price.max}
            onChange={(max) =>
              setFilter({ ...filter, price: { ...filter.price, max } })
            }
            label="Max"
          />
        </PriceWrapper>
      </FilterContainer>
      <StyledDivider />
      <FilterContainer label={"Platform"}>
        {platforms.map((platform) => (
          <FormControl
            control={
              <Checkbox
                checked={filter.platform.includes(platform)}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.checked) {
                    setFilter({
                      ...filter,
                      platform: [...filter.platform, platform],
                    });
                  } else {
                    setFilter({
                      ...filter,
                      platform: filter.platform.filter((p) => p !== platform),
                    });
                  }
                }}
              />
            }
            label={platform}
            key={platform}
          />
        ))}
      </FilterContainer>
      <StyledDivider />
      <FilterContainer label={"Age Rating"}>
        {ageRatings.map((ageRating) => (
          <FormControl
            control={
              <Checkbox
                checked={filter.ageRating.includes(ageRating)}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.checked) {
                    setFilter({
                      ...filter,
                      ageRating: [...filter.ageRating, ageRating],
                    });
                  } else {
                    setFilter({
                      ...filter,
                      ageRating: filter.ageRating.filter(
                        (a) => a !== ageRating,
                      ),
                    });
                  }
                }}
              />
            }
            label={ageRating}
            key={ageRating}
          />
        ))}
      </FilterContainer>
      <StyledDivider />
    </Container>
  );
};
