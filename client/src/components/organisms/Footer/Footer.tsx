import React from "react";
import {
  Container,
  StyledDivider,
  LogoContainer,
  Logo,
  BodyText,
  Content,
  Column,
  HeaderText,
  StyledLink,
} from "./Footer.styles";
import { BASE_URL } from "utils/config";
import sections from "./config";

export const Footer: React.FunctionComponent = () => {
  return (
    <>
      <StyledDivider color="primary" />
      <Container>
        <LogoContainer>
          <Logo
            src={`${BASE_URL}logos/title-one-full-logo.svg`}
            alt="title-one-full-logo"
          />
          <BodyText color="primary">Find your next game.</BodyText>
        </LogoContainer>
        <Content>
          {sections.map((section) => (
            <Column key={section.title}>
              <HeaderText color="primary">{section.title}</HeaderText>
              {section.content.map((line) => (
                <StyledLink
                  key={line.text}
                  to={line.link}
                  style={{ pointerEvents: line.link === "" ? "none" : "auto" }}
                >
                  <BodyText color="primary">{line.text}</BodyText>
                </StyledLink>
              ))}
            </Column>
          ))}
        </Content>
      </Container>
    </>
  );
};
