import React from "react";
import {
  Container,
  Logo,
  ConsoleButton,
  RightContainer,
  SmallSpacer,
  LargeSpacer,
  StyledLink,
} from "./Header.styles";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountIcon from "@mui/icons-material/AccountCircleSharp";
import BasketIcon from "@mui/icons-material/ShoppingBasketSharp";
import { BASE_URL } from "utils/config";
import buttonsConfig from "./config";

export const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Link to="/">
        <Logo
          src={`${BASE_URL}logos/title-one-full-logo.svg`}
          alt="title-one-full-logo"
        />
      </Link>
      <LargeSpacer />
      {buttonsConfig.map((button) => (
        <StyledLink to={button.link}>
          <ConsoleButton key={button.key}>{button.text}</ConsoleButton>
        </StyledLink>
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
