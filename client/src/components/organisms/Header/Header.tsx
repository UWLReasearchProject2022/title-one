import React, { useState } from "react";
import {
  Container,
  Logo,
  ConsoleButton,
  RightContainer,
  SmallSpacer,
  LargeSpacer,
  UserText,
} from "./Header.styles";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountIcon from "@mui/icons-material/AccountCircleSharp";
import BasketIcon from "@mui/icons-material/ShoppingBasketSharp";
import { BASE_URL } from "utils/config";
import { useUserData } from "hooks";
import { SignInModal } from "../SignInModal";

export const Header: React.FunctionComponent = () => {
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const { user } = useUserData();
  const navigate = useNavigate();

  const onAccountClick = () => {
    if (user) {
      navigate("/account");
    } else {
      setSignInOpen(true);
    }
  };

  return (
    <Container>
      <SignInModal open={signInOpen} setOpen={setSignInOpen} />
      <Link to="/">
        <Logo
          src={`${BASE_URL}logos/title-one-full-logo.svg`}
          alt="title-one-full-logo"
        />
      </Link>
      <LargeSpacer />
      {["Xbox", "PlayStation", "Nintendo", "PC Gaming"].map((text) => (
        <ConsoleButton key={text}>{text}</ConsoleButton>
      ))}
      <RightContainer>
        <UserText color="primary">
          {user?.name ? user.name : "Sign In"}
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
