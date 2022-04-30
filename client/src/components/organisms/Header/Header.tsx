import React from "react";
import {
  Container,
  Logo,
  ConsoleButton,
  RightContainer,
  SmallSpacer,
  LargeSpacer,
} from "./Header.styles";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountIcon from "@mui/icons-material/AccountCircleSharp";
import BasketIcon from "@mui/icons-material/ShoppingBasketSharp";
import { BASE_URL } from "utils/config";
import { useUserData } from "hooks";

export const Header: React.FunctionComponent = () => {
  const { userData, dispatchUser } = useUserData();
  const navigate = useNavigate();

  const onAccountClick = () => {
    if (userData.user) {
      navigate("/account");
    } else {
      dispatchUser({
        type: "SET_USER",
        data: {
          email: "test",
          password: "test",
        },
      });
    }
  };

  return (
    <Container>
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
