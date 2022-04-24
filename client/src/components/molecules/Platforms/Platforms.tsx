import React from "react";
import {
  Container,
  PlatformImage,
  PlatformContainer,
} from "./Platforms.styles";
import { BASE_URL } from "utils/config";

const platforms = [
  {
    imageName: "playstation_large.jpg",
    redirectLink: "/search?platform=playstation",
  },
  {
    imageName: "xbox_large.jpg",
    redirectLink: "/search?platform=xbox",
  },
  {
    imageName: "nintendo_large.jpg",
    redirectLink: "/search?platform=nintendo",
  },
  {
    imageName: "PC_large.jpg",
    redirectLink: "/search?platform=PC",
    border: true,
  },
];

export const Platforms: React.FunctionComponent = () => {
  return (
    <Container>
      {platforms.map((platform) => (
        <PlatformContainer to={platform.redirectLink}>
          <PlatformImage
            style={{ borderWidth: platform.border ? "2px" : "0px" }}
            src={`${BASE_URL}/assets/platform/${platform.imageName}`}
          />
        </PlatformContainer>
      ))}
    </Container>
  );
};
