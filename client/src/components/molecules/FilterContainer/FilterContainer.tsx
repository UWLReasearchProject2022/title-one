import { useState } from "react";
import { Collapse } from "@mui/material";
import {
  Wrapper,
  Label,
  ToggleCollapse,
  FieldsWrapper,
  TitleWrapper,
} from "./FilterContainer.styles";

type Props = {
  children: React.ReactNode;
  label: string;
};

export const FilterContainer: React.FunctionComponent<Props> = ({
  children,
  label,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <Wrapper>
      <TitleWrapper>
        <Label>{label}</Label>
        <ToggleCollapse open={open} setOpen={setOpen} />
      </TitleWrapper>
      <Collapse in={open}>
        <FieldsWrapper>{children}</FieldsWrapper>
      </Collapse>
    </Wrapper>
  );
};
