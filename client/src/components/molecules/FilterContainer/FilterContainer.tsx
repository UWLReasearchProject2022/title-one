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
  defaultOpen?: boolean;
};

export const FilterContainer: React.FunctionComponent<Props> = ({
  children,
  label,
  defaultOpen,
}) => {
  const [open, setOpen] = useState(defaultOpen ? defaultOpen : false);
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
