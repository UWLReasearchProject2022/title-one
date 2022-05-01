import React, { useState } from "react";
import {
  Container,
  PlatformImage,
  PlatformText,
  PlatformContainer,
} from "./Platforms.styles";
import platforms from "./config";
import { BASE_URL } from "utils/config";

export const Platforms: React.FunctionComponent = () => {
  return (
    <Container>
      {platforms.map((platform) => {
        const [hovering, setHovering] = useState<boolean>(false);

        const brightness = () => {
          return hovering ? "brightness(85%)" : "none";
        };

        return (
          <PlatformContainer
            key={platform.name}
            to={platform.redirectLink}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <PlatformImage
              style={{
                filter: brightness(),
              }}
              src={`${BASE_URL}/assets/icons/${platform.imageName}`}
            />
            <PlatformText
              color="primary"
              style={{
                filter: brightness(),
              }}
            >
              {platform.name}
            </PlatformText>
          </PlatformContainer>
        );
      })}
    </Container>
  );
};
