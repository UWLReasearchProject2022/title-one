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

type FormValue = User & {
  current_password: string;
  new_password: string;
};

export const UserProfile: React.FunctionComponent<AccountPageProps> = ({
  user,
}) => {
  const initialValue: FormValue = {
    ...user,
    current_password: "",
    new_password: "",
  };
  const [value, setValue] = useState<FormValue>(initialValue);

  const updateValue = (key: keyof FormValue, data: string) => {
    if (key !== "id") {
      const newValue = { ...value };
      newValue[key] = data;
      setValue(newValue);
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
          <StyledIconButton color="primary">
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
