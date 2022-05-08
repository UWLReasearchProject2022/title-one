import React from "react";
import { Address } from "types";
import { GridContainer, GridItem, Input } from "./AddressField.styles";
import fieldConfig from "./config";

type Props = {
  address: Address;
  onChange: (_: Address) => void;
};

export const AddressField: React.FunctionComponent<Props> = ({
  address: value,
  onChange,
}) => {
  const handleChange = (key: keyof Address, data: string) => {
    onChange({ ...value, [key]: data });
  };

  return (
    <>
      <GridContainer container columnSpacing={2}>
        {fieldConfig.map((field) => (
          <GridItem key={field.key} item xs={12} sm={6}>
            <Input
              key={field.key}
              label={field.label}
              size="small"
              helperText=" "
              value={value[field.key as keyof Address]}
              onChange={(event) =>
                handleChange(field.key as keyof Address, event.target.value)
              }
            />
          </GridItem>
        ))}
      </GridContainer>
      <Input
        label={"Postcode"}
        size="small"
        helperText=" "
        value={value.postcode}
        onChange={(event) => handleChange("postcode", event.target.value)}
      />
    </>
  );
};
