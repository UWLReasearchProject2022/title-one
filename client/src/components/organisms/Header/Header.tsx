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
import { Link } from "react-router-dom";
import AccountIcon from "@mui/icons-material/AccountCircleSharp";
import BasketIcon from "@mui/icons-material/ShoppingBasketSharp";

export const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src="logos/title-one-full-logo.svg" alt="title-one-full-logo" />
      </Link>
      <LargeSpacer />
      {["Xbox", "PlayStation", "Nintendo", "PC Gaming"].map((text) => (
        <ConsoleButton>{text}</ConsoleButton>
      ))}
      <RightContainer>
        <Link to="/account">
          <IconButton color="primary">
            <AccountIcon />
          </IconButton>
        </Link>
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
