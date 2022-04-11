import { styled } from "@mui/system";
import { Paper, Rating, Typography } from "@mui/material";

export const Container = styled(Paper)({
  width: "calc(72.5% - 1rem)",
  marginRight: "1rem",
});

export const Header = styled("div")({
  width: "calc(100% - 2rem)",
  height: "2rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const HeaderText = styled(Typography)({
  fontSize: "18px",
});

export const ProductRating = styled(Rating)({});

export const Body = styled("div")({
  padding: "1rem",
  paddingTop: "0rem",
  display: "flex",
});

export const Image = styled("img")({
  height: "40vh",
});

export const Description = styled(Typography)({
  paddingLeft: "1rem",
  whiteSpace: "pre-line",
  fontSize: "14px",
});
