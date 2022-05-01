import React, { SetStateAction } from "react";
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
  CloseButton,
  Form,
} from "./SignInModal.styles";
import { Modal } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { PasswordInput } from "components";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const SignInModal: React.FunctionComponent<Props> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Container>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <MethodContainer>
          <HeaderText>
            <Bold>Existing</Bold> Customers
          </HeaderText>
          <SubHeaderText>Sign into Title1</SubHeaderText>
          <Form error>
            <InputContainer>
              <Input fullWidth type="email" label="Email" size="small" />
              <PasswordInput fullWidth style={{ marginTop: "1rem" }} />
            </InputContainer>
            <ProceedButton variant="contained" color="secondary" type="submit">
              Sign In
            </ProceedButton>
          </Form>
        </MethodContainer>
        <StyledDivider flexItem orientation="vertical" />
        <MethodContainer>
          <HeaderText>
            <Bold>NEW</Bold> Customers
          </HeaderText>
          <SubHeaderText>
            Register with Title1 to find you next game
          </SubHeaderText>
          <ProceedButton variant="contained" color="secondary">
            Register now
          </ProceedButton>
        </MethodContainer>
      </Container>
    </Modal>
  );
};
