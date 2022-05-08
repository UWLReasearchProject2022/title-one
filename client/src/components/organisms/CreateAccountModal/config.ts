import { PasswordInput } from "components";
import { SplitInput, Input } from "./CreateAccountModal.styles";

export default [
  {
    name: "first_name",
    label: "First name",
    style: { paddingRight: "1rem" },
    component: SplitInput,
  },
  {
    name: "last_name",
    label: "Last name",
    component: SplitInput,
  },
  {
    name: "email",
    label: "Email",
    component: Input,
  },
  {
    name: "password",
    label: "Password",
    component: PasswordInput,
  },
];
