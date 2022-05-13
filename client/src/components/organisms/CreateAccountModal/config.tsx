import React from "react";
import { PasswordInput } from "components";
import { SplitInput, Input } from "./CreateAccountModal.styles";
import { TextFieldProps } from "@mui/material";

const SplitInputFC: React.FunctionComponent<TextFieldProps> = (props) => {
  return <SplitInput {...props} />;
};

const InputFC: React.FunctionComponent<TextFieldProps> = (props) => (
  <Input {...props} />
);

export default [
  {
    name: "other_names",
    label: "First name",
    style: { paddingRight: "1rem" },
    component: SplitInputFC,
  },
  {
    name: "surname",
    label: "Last name",
    component: SplitInputFC,
  },
  {
    name: "email",
    label: "Email",
    component: InputFC,
  },
  {
    name: "password",
    label: "Password",
    component: PasswordInput,
  },
];
