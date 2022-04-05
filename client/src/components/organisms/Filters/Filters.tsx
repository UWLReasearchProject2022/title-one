import { ClearFilters, FilterContainer, PriceField } from "components";
import {
  Container,
  TopBar,
  Title,
  Apply,
  Divider,
  Separator,
  PriceWrapper,
  FormControl,
} from "./Filters.styles";
import { Platform, Filter } from "types";
import { Checkbox } from "@mui/material";

type Props = {
  filter: Filter;
  setFilter: (_: Filter) => void;
};

export const Filters: React.FunctionComponent<Props> = ({
  filter,
  setFilter,
}) => {
  const platforms: Platform[] = ["PC", "playstation", "xbox", "switch"];
  return (
    <Container>
      <TopBar>
        <Title>Filters</Title>
        <Apply
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => setFilter({ ...filter, active: true })}
        >
          Apply
        </Apply>
        <ClearFilters filterCount={2} setFilter={setFilter} />
      </TopBar>
      <Divider />
      <FilterContainer label={"Price"}>
        <PriceWrapper>
          <PriceField
            value={filter.price.min}
            onChange={(min) =>
              setFilter({ ...filter, price: { ...filter.price, min } })
            }
            label="Min"
            error={filter.price.min > filter.price.max}
            helperText={
              filter.price.min > filter.price.max
                ? "Min cannot be greater than max"
                : ""
            }
          />
          <Separator>to</Separator>
          <PriceField
            value={filter.price.max}
            onChange={(max) =>
              setFilter({ ...filter, price: { ...filter.price, max } })
            }
            label="Max"
            error={filter.price.min > filter.price.max}
            helperText={
              filter.price.min > filter.price.max
                ? "Max cannot be lower than min"
                : ""
            }
          />
        </PriceWrapper>
      </FilterContainer>
      <Divider />
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
      <Divider />
    </Container>
  );
};
