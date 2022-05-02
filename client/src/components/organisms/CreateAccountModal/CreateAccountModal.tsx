import React from "react";
import { ModalTemplate, PasswordInput } from "components";
import {
  Container,
  HeaderText,
  InputContainer,
  SubHeaderText,
  Input,
  Form,
  ProceedButton,
  SplitInput,
} from "./CreateAccountModal.styles";
import { ModalProps, User } from "types";
import { useAddUser } from "queries";

export const CreateAccountModal: React.FunctionComponent<ModalProps> = ({
  open,
  setOpen,
}) => {
  const { mutate } = useAddUser();

  const onSuccess = (user: User) => {
    console.log(user);
  };

  const onError = () => {
    console.log("FAILED");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    mutate(
      {
        first_name: formData.get("email") as string,
        last_name: "hello",
        email: "",
        password: formData.get("password") as string,
      },
      {
        onSuccess: (_, variables, __) => onSuccess(variables),
        onError: onError,
      },
    );
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
          <SplitInput
            style={{ paddingRight: "1rem" }}
            name="first_name"
            label="First name"
            size="small"
            helperText={" "}
          />
          <SplitInput
            name="last_name"
            label="Last name"
            size="small"
            helperText={" "}
          />
          <Input
            fullWidth
            name="email"
            label="Email"
            size="small"
            helperText={" "}
          />
          <PasswordInput name="password" />
        </InputContainer>
        <ProceedButton type="submit" variant="contained" color="secondary">
          Create account
        </ProceedButton>
      </Form>
    </ModalTemplate>
  );
};
