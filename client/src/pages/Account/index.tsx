import React, { useState } from "react";
import { PageTemplate, SearchBar, Placeholder } from "components";
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

const tabsConfig = [
  {
    key: "profile",
    name: "Profile",
    component: Placeholder,
  },
  {
    key: "orders",
    name: "Orders",
    component: Placeholder,
  },
];

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
            <TabContainer>
              <HeaderText>{`${user.first_name} ${user.last_name}`}</HeaderText>
              <SignOutButton
                variant="contained"
                color="secondary"
                onClick={signOut}
              >
                Sign Out
              </SignOutButton>
            </TabContainer>
            {tabsConfig.map((tab) => (
              <>
                <StyledDivider />
                <TabContainer>
                  <TabButton onClick={() => setActiveTab(tab.key)}>
                    {tab.name}
                  </TabButton>
                </TabContainer>
              </>
            ))}
          </TabsContainer>
          {tabsConfig.map((tab) => (
            <ContentContainer hidden={tab.key !== activateTab}>
              <tab.component>{tab.name}</tab.component>
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
