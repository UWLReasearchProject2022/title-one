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
import { useSnackbar } from "notistack";

type Errors = {
  other_names: string;
  surname: string;
  email: string;
  password: string;
};

export const CreateAccountModal: React.FunctionComponent<ModalProps> = ({
  open,
  setOpen,
}) => {
  const initialErrors = {
    other_names: " ",
    surname: " ",
    email: " ",
    password: " ",
  };
  const { enqueueSnackbar } = useSnackbar();
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const { mutate } = useAddUser();
  const { dispatchUserData } = useUserData();

  const handleSuccess = (user: User) => {
    dispatchUserData({
      type: "SET_USER",
      data: {
        email: user.email,
        password: user.password,
      },
    });
    setOpen(false);
    enqueueSnackbar("Successfully created!", { variant: "success" });
  };

  const handleError = () => {
    enqueueSnackbar("Failed to create account!", { variant: "error" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: Errors = {
      other_names: " ",
      surname: " ",
      email: " ",
      password: " ",
    };

    const formData = new FormData(event.currentTarget);
    const other_names = formData.get("other_names") as string;
    const surname = formData.get("surname") as string;
    const email = formData.get("email") as string;

    newErrors.other_names = isBlank(other_names) ? "Please complete" : " ";
    newErrors.surname = isBlank(surname) ? "Please complete" : " ";

    if (newErrors.other_names === " " && newErrors.surname === " ") {
      if (!validateEmail(email)) {
        newErrors.email = "Invalid email";
      } else {
        const users = await getUser(email);
        if (!users || users.length !== 0) {
          newErrors.email = "Email already registered";
        } else {
          addUser({
            other_names: other_names,
            surname: surname,
            email: email,
            password: formData.get("password") as string,
            address: {
              house_number: "",
              road_name: "",
              city: "",
              county: "",
              postcode: "",
            },
          });
        }
      }
    }
    setErrors(newErrors);
  };

  const addUser = (user: User) => {
    mutate(user, {
      onSuccess: (_, variables, __) => handleSuccess(variables),
      onError: handleError,
    });
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
