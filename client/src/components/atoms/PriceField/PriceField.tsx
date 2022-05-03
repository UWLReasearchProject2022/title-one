import { InputAdornment } from "@mui/material";
import { InputField } from "./PriceField.styles";

type Props = {
  value: number;
  onChange: (_: number) => void;
  label: string;
};

export const PriceField: React.FunctionComponent<Props> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <InputField
      value={value}
      label={label}
      onChange={(e) => {
        const newValue = e.target.value as unknown as number;
        if (!isNaN(newValue)) onChange(newValue);
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">£</InputAdornment>,
      }}
      size="small"
    />
  );
};
