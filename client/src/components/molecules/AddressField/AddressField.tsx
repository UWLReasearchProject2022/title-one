import React from "react";
import { Address } from "types";
import { GridContainer, GridItem, Input } from "./AddressField.styles";
import fieldConfig from "./config";

export type AddressErrors = {
  house_number: string;
  road_name: string;
  city: string;
  county: string;
  postcode: string;
};

type Props = {
  style?: React.CSSProperties;
  address: Address;
  errors?: AddressErrors;
  onChange: (_: Address) => void;
};

export const AddressField: React.FunctionComponent<Props> = ({
  style,
  address: value,
  errors,
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
              style={style}
              key={field.key}
              label={field.label}
              size="small"
              error={errors && errors[field.key as keyof AddressErrors] !== " "}
              helperText={
                errors ? errors[field.key as keyof AddressErrors] : " "
              }
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
        error={errors && errors["postcode"] !== " "}
        helperText={errors ? errors["postcode"] : " "}
        value={value.postcode}
        onChange={(event) => handleChange("postcode", event.target.value)}
      />
    </>
  );
};
