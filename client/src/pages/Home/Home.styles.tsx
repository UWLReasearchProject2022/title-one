import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CoverContainer = styled("div")({
  position: "relative",
  left: "-12.5vw",
  height: "36vh",
  width: "100vw",
});

export const CoverSearchContainer = styled("form")({
  position: "absolute",
  left: "50%",
  top: "50%",
  height: "calc(6rem + 2%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  transform: "translateX(-50%) translateY(-50%)",
  pointerEvents: "auto",
});

export const CoverImage = styled("img")({
  position: "relative",
  height: "100%",
  width: "100%",
  objectFit: "cover",
  objectPosition: "50% 50%",
  pointerEvents: "none",
});

export const CoverText = styled(Typography)({
  fontWeight: 650,
  fontSize: "26px",
});

export const CoverSearch = styled(TextField)({
  width: "20rem",
  "& .MuiOutlinedInput-notchedOutline": {
    visibility: "hidden",
  },
});
