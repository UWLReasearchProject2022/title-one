import { Divider, styled, Typography, TextField } from "@mui/material";
import { Rating } from "@mui/material";

export const Container = styled("div")({});

export const ReviewsContainer = styled("div")({
  width: "100%",
  display: "flex",
  marginBottom: "2rem",
});

export const OverviewContainer = styled("div")({
  width: "15%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingRight: "2rem",
});

export const BreakdownContainer = styled("div")({
  width: "17.5%",
});

export const CommentsContainer = styled("div")({
  width: "52.5%",
  paddingLeft: "5%",
  paddingRight: "5%",
  display: "flex",
  flexDirection: "column",
});

export const DatesContainer = styled("div")({
  width: "15%",
  display: "flex",
  flexDirection: "column",
});

export const DateText = styled(Typography)({
  paddingTop: "0.5rem",
  fontSize: "14px",
});

export const UserDetails = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "1rem",
});

export const UserText = styled(Typography)({
  paddingLeft: "1rem",
});

export const RatingContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const RatingText = styled(Typography)({
  paddingTop: "0.5rem",
  fontSize: "14px",
});

export const OverallRating = styled(Rating)({});

export const CommentContainer = styled("div")({ display: "flex" });

export const CommentsText = styled(Typography)({
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  fontSize: "14px",
});

export const StyledDivider = styled(Divider)({
  marginBottom: "2rem",
});

export const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "2rem",
});

export const Text = styled(Typography)({ fontSize: "14px" });

export const Input = styled(TextField)({
  width: "8rem",
});
