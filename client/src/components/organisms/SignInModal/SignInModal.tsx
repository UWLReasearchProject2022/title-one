import React, { useState, SetStateAction } from "react";
import {
  Bold,
  Container,
  HeaderText,
  MethodContainer,
  ProceedButton,
  StyledDivider,
  SubHeaderText,
  Input,
  InputContainer,
  Form,
} from "./SignInModal.styles";
import { PasswordInput, ModalTemplate } from "components";
import { validateEmail } from "utils/helpers";
import { getUser } from "services";
import { useUserData } from "hooks";

type FormValue = {
  email: { data: string; error: string };
  password: { data: string; error: string };
};

type Props = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const SignInModal: React.FunctionComponent<Props> = ({
  open,
  setOpen,
}) => {
  const initialValue = {
    email: { data: "", error: " " },
    password: { data: "", error: " " },
  };
  const [value, setValue] = useState<FormValue>(initialValue);
  const { dispatchUserData } = useUserData();

  const handleChange = (key: keyof FormValue, data: string) => {
    const newValue = { ...value };
    newValue[key].data = data;
    setValue(newValue);
  };

  const setError = (email: string, password: string) => {
    const newValue = { ...value };
    newValue.email.error = email;
    newValue.password.error = password;
    setValue(newValue);
  };

  const handleSubmit = async () => {
    if (!validateEmail(value.email.data)) {
      setError("Invalid email", " ");
    } else {
      const users = await getUser(value.email.data);
      if (users && users.length !== 1) {
        setError("Account not found", " ");
      } else {
        if (users[0].password !== value.password.data) {
          setError(" ", "Password is incorrect");
        } else {
          setError(" ", " ");
          dispatchUserData({
            type: "SET_USER",
            data: {
              email: value.email.data,
              password: value.password.data,
            },
          });
          setOpen(false);
        }
      }
    }
  };

  return (
    <ModalTemplate open={open} setOpen={setOpen} Container={Container}>
      <MethodContainer>
        <HeaderText>
          <Bold>Existing</Bold> Customers
        </HeaderText>
        <SubHeaderText>Sign into Title1</SubHeaderText>
        <Form>
          <InputContainer>
            <Input
              fullWidth
              error={value.email.error !== " "}
              helperText={value.email.error}
              type="email"
              label="Email"
              size="small"
              value={value.email.data}
              onChange={(event) => {
                handleChange("email", event.target.value);
              }}
            />
            <PasswordInput
              fullWidth
              error={value.password.error !== " "}
              helperText={value.password.error}
              style={{ marginTop: "0.25rem" }}
              value={value.password.data}
              onChange={(event) => handleChange("password", event.target.value)}
            />
          </InputContainer>
          <ProceedButton
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            style={{ marginTop: "0.5rem" }}
          >
            Sign In
          </ProceedButton>
        </Form>
      </MethodContainer>
      <StyledDivider flexItem orientation="vertical" />
      <MethodContainer>
        <HeaderText>
          <Bold>New</Bold> Customers
        </HeaderText>
        <SubHeaderText>
          Register with Title1 to find you next game
        </SubHeaderText>
        <ProceedButton
          variant="contained"
          color="secondary"
          style={{ marginTop: "2rem" }}
        >
          Register now
        </ProceedButton>
      </MethodContainer>
    </ModalTemplate>
  );
};
