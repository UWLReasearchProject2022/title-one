import React from "react";
import {
  Container,
  PlatformImage,
  PlatformContainer,
} from "./Platforms.styles";
import platforms from "./config";
import { BASE_URL } from "utils/config";

export const Platforms: React.FunctionComponent = () => {
  return (
    <Container>
      {platforms.map((platform) => (
        <PlatformContainer key={platform.imageName} to={platform.redirectLink}>
          <PlatformImage
            style={{ borderWidth: platform.border ? "2px" : "0px" }}
            src={`${BASE_URL}/assets/platform/${platform.imageName}`}
          />
        </PlatformContainer>
      ))}
    </Container>
  );
};
