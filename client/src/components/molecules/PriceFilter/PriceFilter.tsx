import { useState } from "react";
import { PriceField } from "components";
import { PriceRange } from "types";
import { Collapse } from "@mui/material";
import {
  Wrapper,
  Separator,
  Label,
  ToggleCollapse,
  FieldsWrapper,
} from "./PriceFilter.styles";

type Props = {
  priceRange: PriceRange;
  setPriceRange: (_: PriceRange) => void;
};

export const PriceFilter: React.FunctionComponent<Props> = ({
  priceRange,
  setPriceRange,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <Wrapper>
      <Label>Price</Label>
      <ToggleCollapse open={open} setOpen={setOpen} />
      <Collapse in={open}>
        <FieldsWrapper>
          <PriceField
            value={priceRange.min}
            onChange={(min) => setPriceRange({ ...priceRange, min })}
            label="Min"
            error={priceRange.min > priceRange.max}
            helperText={
              priceRange.min > priceRange.max
                ? "Min cannot be greater than max"
                : ""
            }
          />
          <Separator>to</Separator>
          <PriceField
            value={priceRange.max}
            onChange={(max) => setPriceRange({ ...priceRange, max })}
            label="Max"
            error={priceRange.min > priceRange.max}
            helperText={
              priceRange.min > priceRange.max
                ? "Max cannot be lower than min"
                : ""
            }
          />
        </FieldsWrapper>
      </Collapse>
    </Wrapper>
  );
};
