import React from "react";
import { PageTemplate } from "components";
import {
  Container,
  CoverImage,
  Content,
  Title,
  SubTitle,
  StyledIconButton,
  HomeButton,
} from "./OrderPlaced.styles";
import { BASE_URL } from "utils/config";
import { useNavigate } from "react-router-dom";
import { OpenInNew as LinkToIcon } from "@mui/icons-material";

export const OrderPlaced: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <Container>
        <CoverImage src={`${BASE_URL}/assets/images/gt7-cover.webp`} />
        <Content>
          <Title>Your order is being processed!</Title>
          <SubTitle>
            Mission complete. Thanks for your purchase, we will deliver it as
            soon as possible.
          </SubTitle>
          <SubTitle>
            View your order history on your Account
            <StyledIconButton
              color="primary"
              onClick={() => navigate("/account")}
            >
              <LinkToIcon fontSize="small" />
            </StyledIconButton>
          </SubTitle>
          <HomeButton
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
          >
            Back to home
          </HomeButton>
        </Content>
      </Container>
    </PageTemplate>
  );
};
