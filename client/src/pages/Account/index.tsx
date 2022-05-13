import React, { useState } from "react";
import { PageTemplate, SearchBar } from "components";
import { useUserData } from "hooks";
import {
  SignInText,
  ErrorContainer,
  TabsContainer,
  ContentContainer,
  Container,
  HeaderText,
  StyledDivider,
  TabButton,
  SignOutButton,
  TabContainer,
} from "./Account.styles";
import { useNavigate } from "react-router-dom";
import tabsConfig from "./config";

export const Account: React.FunctionComponent = () => {
  const { user } = useUserData();
  const [activateTab, setActiveTab] = useState<string>(tabsConfig[0].key);
  const navigate = useNavigate();
  const { dispatchUserData } = useUserData();

  const signOut = () => {
    dispatchUserData({
      type: "SIGN_OUT",
    });
    navigate("/");
  };

  return (
    <PageTemplate>
      <SearchBar backTo="/" backPage="home" />
      {user ? (
        <Container>
          <TabsContainer>
            <TabContainer
              style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
            >
              <HeaderText>{`${user.other_names} ${user.surname}`}</HeaderText>
              <SignOutButton
                variant="contained"
                color="secondary"
                onClick={signOut}
              >
                Sign Out
              </SignOutButton>
            </TabContainer>
            {tabsConfig.map((tab) => (
              <div key={tab.key}>
                <StyledDivider />
                <TabContainer>
                  <TabButton onClick={() => setActiveTab(tab.key)}>
                    {tab.name}
                  </TabButton>
                </TabContainer>
              </div>
            ))}
            <StyledDivider />
          </TabsContainer>
          {tabsConfig.map((tab) => (
            <ContentContainer key={tab.key} hidden={tab.key !== activateTab}>
              <tab.component user={user}>{tab.name}</tab.component>
            </ContentContainer>
          ))}
        </Container>
      ) : (
        <ErrorContainer>
          <SignInText color="primary">Please sign in</SignInText>
        </ErrorContainer>
      )}
    </PageTemplate>
  );
};
