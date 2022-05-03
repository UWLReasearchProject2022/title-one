import React from "react";
import {
  Container,
  DescriptionText,
  Image,
  Item,
  NameText,
  StyledGrid,
  TextContainer,
  StyledLink,
} from "./Categories.styles";
import categories from "./config";
import { BASE_URL } from "utils/config";

export const Categories: React.FunctionComponent = () => {
  return (
    <Container>
      <StyledGrid container columnSpacing={2} rowSpacing={2}>
        {categories.map((category) => (
          <StyledGrid key={category.name} item xs={6}>
            <StyledLink
              to={category.redirectLink}
              style={{ textDecoration: "none" }}
            >
              <Item>
                <TextContainer>
                  <NameText>{category.name}</NameText>
                  <DescriptionText>{category.description}</DescriptionText>
                </TextContainer>
                <Image
                  src={`${BASE_URL}/assets/images/${category.imageName}`}
                />
              </Item>
            </StyledLink>
          </StyledGrid>
        ))}
      </StyledGrid>
    </Container>
  );
};
