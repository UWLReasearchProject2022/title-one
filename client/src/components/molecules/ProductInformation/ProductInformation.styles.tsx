import { styled } from "@mui/system";
import { Typography, Collapse, Button } from "@mui/material";

export const HeaderText = styled(Typography)({
  fontSize: "16px",
  textDecoration: "underline",
});

export const BodyText = styled(Typography)({
  fontSize: "14px",
  whiteSpace: "pre-line",
  padding: "1rem",
  paddingBottom: "0rem",
});

export const DetailsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "end",
  paddingTop: "2rem",
});

export const DetailContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "33.3333%",
});

export const DetailText = styled(Typography)({
  fontSize: "16px",
});

export const DetailIcon = styled("img")({
  height: "3rem",
  marginBottom: "0.5rem",
  borderRadius: "0.5rem",
});

export const StyledCollapse = styled(Collapse)({ marginBottom: "0.5rem" });

export const CollapseButton = styled(Button)({
  textTransform: "none",
  marginBottom: "1rem",
  "& .MuiButton-startIcon": {
    marginRight: "0.25rem",
  },
});

export const CollapseButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
