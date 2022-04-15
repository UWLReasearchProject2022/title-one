import React, { useState } from "react";
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
import { Divider } from "@mui/material";
import { pegiIcons, developerIcons, platformIcons } from "utils/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const ProductInformation: React.FunctionComponent<TabComponentProps> = ({
  product,
}) => {
  const [textExpanded, setTextExpanded] = useState<boolean>(false);
  return (
    <>
      <HeaderText>{`Release (${product.release_date})`}</HeaderText>
      <StyledCollapse in={textExpanded} collapsedSize={"6.25rem"}>
        <BodyText>{product.long_description}</BodyText>
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
      <Divider />
      <DetailsContainer>
        <DetailContainer>
          <DetailIcon src={pegiIcons[product.age_rating]} />
          <DetailText>{`Age rating: ${product.age_rating}`}</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailIcon src={platformIcons[product.platform]} />
          <DetailText>{`Platform: ${product.platform}`}</DetailText>
        </DetailContainer>
        <DetailContainer>
          <DetailIcon src={developerIcons[product.developer]} />
          <DetailText>{`Developer: ${product.developer}`}</DetailText>
        </DetailContainer>
      </DetailsContainer>
    </>
  );
};
