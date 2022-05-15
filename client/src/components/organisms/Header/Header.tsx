import React, { useState } from "react";
import {
  Container,
  Logo,
  ConsoleButton,
  RightContainer,
  SmallSpacer,
  LargeSpacer,
  UserText,
  StyledLink,
} from "./Header.styles";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountIcon from "@mui/icons-material/AccountCircleSharp";
import BasketIcon from "@mui/icons-material/ShoppingBasketSharp";
import { BASE_URL } from "utils/config";
import { useUserData } from "hooks";
import { SignInModal } from "../SignInModal";
import { CreateAccountModal } from "components";
import buttonsConfig from "./config";

export const Header: React.FunctionComponent = () => {
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const [createAccountOpen, setCreateAccountOpen] = useState<boolean>(false);
  const { user } = useUserData();
  const navigate = useNavigate();

  const onAccountClick = () => {
    if (user) {
      navigate("/account");
    } else {
      setSignInOpen(true);
    }
  };

  const handleCreateAccount = () => {
    setSignInOpen(false);
    setCreateAccountOpen(true);
  };

  return (
    <Container>
      <CreateAccountModal
        open={createAccountOpen}
        setOpen={setCreateAccountOpen}
      />
      <SignInModal
        open={signInOpen}
        setOpen={setSignInOpen}
        handleCreateAccount={handleCreateAccount}
      />
      <Link to="/">
        <Logo
          src={`${BASE_URL}/logos/title-one-full-logo.svg`}
          alt="title-one-full-logo"
        />
      </Link>
      <LargeSpacer />
      {buttonsConfig.map((button) => (
        <StyledLink key={button.key} to={button.link}>
          <ConsoleButton>{button.text}</ConsoleButton>
        </StyledLink>
      ))}
      <RightContainer>
        <UserText color="primary">
          {user ? `${user.other_names} ${user.surname}` : "Sign In"}
        </UserText>
        <IconButton color="primary" onClick={() => onAccountClick()}>
          <AccountIcon />
        </IconButton>
        <SmallSpacer />
        <Link to="/basket">
          <IconButton color="primary">
            <BasketIcon />
          </IconButton>
        </Link>
      </RightContainer>
    </Container>
  );
};
