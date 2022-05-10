import React from "react";
import { TabComponentProps } from "types";
import {
  HeaderText,
  BodyText,
  DetailsContainer,
  DetailContainer,
  DetailText,
  DetailIcon,
  StyledCollapse,
  CollapseButton,
  CollapseButtonContainer,
} from "./ProductInformation.styles";
import { pegiIcons, developerIcons, platformIcons } from "utils/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const ProductInformation: React.FunctionComponent<TabComponentProps> = ({
  productPlatform,
  textExpanded,
  setTextExpanded,
}) => {
  return (
    <>
      <HeaderText>{`Release (${productPlatform.product.release_date})`}</HeaderText>
      <StyledCollapse in={textExpanded} collapsedSize={"6.25rem"}>
        <BodyText>{productPlatform.product.long_description}</BodyText>
      </StyledCollapse>
      <CollapseButtonContainer>
        <CollapseButton
          color="secondary"
          onClick={() => setTextExpanded(!textExpanded)}
          startIcon={textExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {textExpanded ? "Collapse" : "Expand"}
        </CollapseButton>
      </CollapseButtonContainer>
      <DetailsContainer>
        <DetailContainer>
          <DetailIcon src={pegiIcons[productPlatform.product.age_rating]} />
          <DetailText>{`Age rating: ${productPlatform.product.age_rating}`}</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailIcon src={platformIcons[productPlatform.platform.name]} />
          <DetailText>{`Platform: ${productPlatform.platform.name}`}</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailIcon src={developerIcons[productPlatform.product.developer]} />
          <DetailText>{`Developer: ${productPlatform.product.developer}`}</DetailText>
        </DetailContainer>
      </DetailsContainer>
    </>
  );
};
