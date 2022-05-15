import React from "react";
import { PasswordInput, AddressField } from "components";
import { SplitInput, Input } from "./UserProfile.styles";
import { TextFieldProps } from "@mui/material";

const SplitInputFC: React.FunctionComponent<TextFieldProps> = (props) => {
  return <SplitInput {...props} />;
};

const InputFC: React.FunctionComponent<TextFieldProps> = (props) => (
  <Input {...props} />
);

export default [
  {
    key: "about_you",
    title: "About you",
    config: [
      {
        key: "other_names",
        label: "First name",
        component: SplitInputFC,
      },
      {
        key: "surname",
        label: "Last name",
        component: SplitInputFC,
      },
    ],
  },
  {
    key: "contact_details",
    title: "Contact details",
    config: [
      {
        key: "email",
        label: "Email",
        component: InputFC,
      },
    ],
  },
  {
    key: "Password",
    title: "Password",
    config: [
      {
        key: "password",
        label: "Current password",
        component: PasswordInput,
      },
      {
        key: "new_password",
        label: "New password",
        component: PasswordInput,
      },
    ],
  },
  {
    key: "address",
    title: "Delivery address",
    component: AddressField,
  },
];
