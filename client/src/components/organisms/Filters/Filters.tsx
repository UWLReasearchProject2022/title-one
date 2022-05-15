import { ClearFilters, FilterContainer, PriceField } from "components";
import {
  Container,
  TopBar,
  Title,
  StyledDivider,
  Separator,
  PriceWrapper,
  FormControl,
  Body,
} from "./Filters.styles";
import { Platform, Filter, AgeRating, Category } from "types";
import { Checkbox } from "@mui/material";

type Props = {
  filter: Filter;
  setFilter: (_: Filter) => void;
};

export const Filters: React.FunctionComponent<Props> = ({
  filter,
  setFilter,
}) => {
  const platforms: Platform[] = ["Playstation", "Xbox", "Nintendo", "PC"];
  const ageRatings: AgeRating[] = ["3+", "7+", "12+", "16+", "18+"];
  const categories: Category[] = [
    "Shooter",
    "Racing",
    "Role-playing (RPG)",
    "Simulator",
    "Platform",
    "Real Time Strategy (RTS)",
    "Puzzle",
    "Fighting",
  ];
  return (
    <Container>
      <TopBar>
        <Title>Filters</Title>
        <ClearFilters setFilter={setFilter} />
      </TopBar>
      <Body>
        <StyledDivider style={{ marginTop: "0rem" }} />
        <FilterContainer defaultOpen label={"Price"}>
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
        <FilterContainer label={"Category"}>
          {categories.map((category) => (
            <FormControl
              control={
                <Checkbox
                  checked={filter.category.includes(category)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.checked) {
                      setFilter({
                        ...filter,
                        category: [...filter.category, category],
                      });
                    } else {
                      setFilter({
                        ...filter,
                        category: filter.category.filter((p) => p !== category),
                      });
                    }
                  }}
                />
              }
              label={category}
              key={category}
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
      </Body>
    </Container>
  );
};
