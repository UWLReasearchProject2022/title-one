import { InputAdornment } from "@mui/material";
import { InputField } from "./PriceField.styles";

type Props = {
  value: number;
  onChange: (_: number) => void;
  label: string;
  error: boolean;
  helperText: string;
};

export const PriceField: React.FunctionComponent<Props> = ({
  value,
  onChange,
  label,
  error,
  helperText,
}) => {
  return (
    <InputField
      type="number"
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value as unknown as number)}
      InputProps={{
        startAdornment: <InputAdornment position="start">£</InputAdornment>,
      }}
      size="small"
      error={error}
      helperText={helperText}
    />
  );
};
