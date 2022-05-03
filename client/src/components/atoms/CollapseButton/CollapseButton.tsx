import { ToggleCollapse } from "./CollapseButton.styles";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
type Props = {
  open: boolean;
  setOpen: (_: boolean) => void;
};

export const CollapseButton: React.FunctionComponent<Props> = ({
  open,
  setOpen,
}) => {
  return (
    <ToggleCollapse onClick={() => setOpen(!open)}>
      {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    </ToggleCollapse>
  );
};
