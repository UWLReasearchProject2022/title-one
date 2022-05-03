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
import { User } from "types";
import { useUpdateUser } from "queries";

type FormValue = User & {
  new_password: string;
};

export const UserProfile: React.FunctionComponent<AccountPageProps> = ({
  user,
}) => {
  if (!user.id) return null;

  const initialValue: FormValue = {
    ...user,
    password: "",
    new_password: "",
  };

  const { mutate } = useUpdateUser(user.id);
  const [value, setValue] = useState<FormValue>(initialValue);

  const updateValue = (key: keyof FormValue, data: string) => {
    if (key !== "id") {
      const newValue = { ...value };
      newValue[key] = data;
      setValue(newValue);
    }
  };

  const handleSubmit = () => {
    if (user.password === value.password) {
      const newUser = { ...value, password: value.new_password };
      mutate(newUser);
      updateValue("password", "");
      updateValue("new_password", "");
    }
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
        {sectionsConfig.map((section) => (
          <div key={section.key}>
            <BodyText>{section.title}</BodyText>
            <Form>
              {section.config.map((input) => {
                return (
                  <input.component
                    autocomplete="off"
                    key={input.key}
                    name={input.key}
                    label={input.label}
                    style={
                      input.key === "first_name" ? { marginRight: "1rem" } : {}
                    }
                    size="small"
                    helperText={" "}
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
          </div>
        ))}
      </Body>
    </>
  );
};
