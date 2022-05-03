import { SplitInput } from "../CreateAccountModal/CreateAccountModal.styles";
import { Input } from "./UserProfile.styles";
import { PasswordInput } from "components";

export default [
  {
    key: "about_you",
    title: "About you",
    config: [
      {
        key: "first_name",
        label: "First name",
        component: SplitInput,
      },
      {
        key: "last_name",
        label: "Last name",
        component: SplitInput,
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
        component: Input,
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
  //   {
  //     key: "delivery_address",
  //     title: "Delivery address",
  //     config: [],
  //   },
];
