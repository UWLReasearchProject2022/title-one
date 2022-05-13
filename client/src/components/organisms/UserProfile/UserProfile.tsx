import React, { useState } from "react";
import { AccountPageProps } from "types";
import {
  Header,
  HeaderText,
  StyledDivider,
  SubHeaderText,
  Body,
  BodyText,
  Form,
  StyledIconButton,
  HeaderTextContainer,
  ControlsContainer,
} from "./UserProfile.styles";
import { Refresh as RefreshIcon, Save as SaveIcon } from "@mui/icons-material";
import sectionsConfig from "./config";
import { User, Address } from "types";
import { useUpdateUser } from "queries";
import { isBlank, validateEmail } from "utils/helpers";
import { getUser } from "services";
import { useUserData } from "hooks";
import { useSnackbar } from "notistack";

type FormValue = User & {
  new_password: string;
};

type Errors = {
  other_names: string;
  surname: string;
  email: string;
  password: string;
  new_password: string;
};

export const UserProfile: React.FunctionComponent<AccountPageProps> = ({
  user,
}) => {
  if (!user.user_id) return null;

  const initialValue: FormValue = {
    ...user,
    password: "",
    new_password: "",
  };

  const initialErrors: Errors = {
    other_names: " ",
    surname: " ",
    email: " ",
    password: " ",
    new_password: " ",
  };
  const { enqueueSnackbar } = useSnackbar();
  const { mutate } = useUpdateUser(user.user_id);
  const { dispatchUserData } = useUserData();
  const [value, setValue] = useState<FormValue>(initialValue);
  const [errors, setErrors] = useState<Errors>(initialErrors);

  const updateValue = (key: keyof FormValue, data: string | Address) => {
    if (key !== "user_id") {
      const newValue = { ...value };
      if (key === "address") {
        newValue.address = data as Address;
      } else {
        newValue[key] = data as string;
      }
      setValue(newValue);
    }
  };

  const handleSubmit = async () => {
    const newErrors = initialErrors;
    newErrors.other_names = isBlank(value.other_names)
      ? "Please complete"
      : " ";
    newErrors.surname = isBlank(value.surname) ? "Please complete" : " ";
    if (user.email !== value.email) {
      if (!validateEmail(value.email)) {
        newErrors.email = "Invalid email";
      } else {
        const users = await getUser(value.email);
        if (!users || users.length !== 0) {
          newErrors.email = "Email already registered";
        }
      }
    }
    if (value.password !== user.password) {
      newErrors.password = "Password incorrect";
    }
    if (!errorsExist(newErrors)) {
      updateUser(value);
    }
    setErrors(newErrors);
  };

  const errorsExist = (newErrors: Errors): boolean => {
    let exists = false;
    Object.values(newErrors).forEach((error) => {
      if (error !== " ") {
        exists = true;
      }
    });
    return exists;
  };

  const updateUser = (updatedValue: FormValue) => {
    const updatedUser: User = {
      user_id: updatedValue.user_id,
      other_names: updatedValue.other_names,
      surname: updatedValue.surname,
      email: updatedValue.email,
      password:
        updatedValue.new_password === ""
          ? updatedValue.password
          : updatedValue.new_password,
      address: updatedValue.address,
    };
    mutate(updatedUser, {
      onSuccess: handleSuccess,
      onError: handleError,
    });
    dispatchUserData({
      type: "SET_USER",
      data: {
        email: updatedUser.email,
        password: updatedUser.password,
      },
    });
  };

  const handleSuccess = () => {
    enqueueSnackbar("Successfully updated!", { variant: "success" });
  };

  const handleError = () => {
    enqueueSnackbar("Failed to update account!", { variant: "error" });
  };

  const resetValue = () => {
    setValue(initialValue);
  };

  return (
    <>
      <Header>
        <HeaderTextContainer>
          <HeaderText>Profile</HeaderText>
          <SubHeaderText>
            Update your name, password and delivery address
          </SubHeaderText>
        </HeaderTextContainer>
        <ControlsContainer>
          <StyledIconButton color="primary" onClick={resetValue}>
            <RefreshIcon />
          </StyledIconButton>
          <StyledIconButton color="primary" onClick={handleSubmit}>
            <SaveIcon />
          </StyledIconButton>
        </ControlsContainer>
      </Header>
      <StyledDivider />
      <Body>
        {sectionsConfig.map((section) => {
          return (
            <div key={section.key}>
              <BodyText>{section.title}</BodyText>
              {section.component ? (
                <section.component
                  address={value.address}
                  onChange={(newAddress) => updateValue("address", newAddress)}
                />
              ) : (
                <Form>
                  {section.config.map((input) => {
                    return (
                      <input.component
                        key={input.key}
                        name={input.key}
                        label={input.label}
                        style={
                          input.key === "other_names"
                            ? { marginRight: "1rem" }
                            : {}
                        }
                        size="small"
                        error={errors[input.key as keyof Errors] !== " "}
                        helperText={errors[input.key as keyof Errors]}
                        value={value[input.key as keyof FormValue]}
                        onChange={(event) =>
                          updateValue(
                            input.key as keyof FormValue,
                            event.target.value,
                          )
                        }
                      />
                    );
                  })}
                </Form>
              )}
            </div>
          );
        })}
      </Body>
    </>
  );
};
