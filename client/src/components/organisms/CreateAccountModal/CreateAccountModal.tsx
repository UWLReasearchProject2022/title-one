import React, { useState } from "react";
import { ModalTemplate } from "components";
import {
  Container,
  HeaderText,
  InputContainer,
  SubHeaderText,
  Form,
  ProceedButton,
} from "./CreateAccountModal.styles";
import { ModalProps, User } from "types";
import { useAddUser } from "queries";
import { validateEmail, isBlank } from "utils/helpers";
import { getUser } from "services";
import formConfig from "./config";
import { useUserData } from "hooks";

type Errors = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export const CreateAccountModal: React.FunctionComponent<ModalProps> = ({
  open,
  setOpen,
}) => {
  const initialErrors = {
    first_name: " ",
    last_name: " ",
    email: " ",
    password: " ",
  };
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const { mutate } = useAddUser();
  const { dispatchUserData } = useUserData();

  const onSuccess = (user: User) => {
    console.log(user);
    dispatchUserData({
      type: "SET_USER",
      data: {
        email: user.email,
        password: user.password,
      },
    });
    setOpen(false);
  };

  const onError = () => {
    setError("password", "Something went wrong, please try again later");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: Errors = {
      first_name: " ",
      last_name: " ",
      email: " ",
      password: " ",
    };

    const formData = new FormData(event.currentTarget);
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string;
    const email = formData.get("email") as string;

    newErrors.first_name = isBlank(first_name) ? "Please complete" : " ";
    newErrors.last_name = isBlank(last_name) ? "Please complete" : " ";

    if (newErrors.first_name === " " && newErrors.last_name === " ") {
      if (!validateEmail(email)) {
        newErrors.email = "Invalid email";
      } else {
        const users = await getUser(email);
        if (!users || users.length !== 0) {
          newErrors.email = "Email already registered";
        } else {
          addUser({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: formData.get("password") as string,
          });
        }
      }
    }
    setErrors(newErrors);
  };

  const addUser = (user: User) => {
    mutate(user, {
      onSuccess: (_, variables, __) => onSuccess(variables),
      onError: onError,
    });
  };

  const setError = (key: keyof Errors, data: string) => {
    const newErrors = { ...errors };
    newErrors[key] = data;
    setErrors(newErrors);
  };

  return (
    <ModalTemplate open={open} setOpen={setOpen} Container={Container}>
      <HeaderText>Create an account</HeaderText>
      <SubHeaderText>
        With a Title1 account you can add reviews, manage orders and checkout
        faster!
      </SubHeaderText>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          {formConfig.map((config) => {
            return (
              <config.component
                key={config.name}
                style={config.style ? config.style : {}}
                name={config.name}
                label={config.label}
                size="small"
                error={
                  errors[config.name as keyof Errors] === " " ? false : true
                }
                helperText={errors[config.name as keyof Errors]}
              />
            );
          })}
        </InputContainer>
        <ProceedButton type="submit" variant="contained" color="secondary">
          Create account
        </ProceedButton>
      </Form>
    </ModalTemplate>
  );
};
