import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const Container = styled(Paper)({
  minHeight: "22rem",
  marginTop: "2rem",
  paddingTop: "1.5rem",
  paddingBottom: "0.75rem",
});

export const OverflowContainer = styled("div")({
  marginLeft: "2rem",
  marginRight: "2rem",
  paddingBottom: "0.75rem",
  display: "flex",
  alignItems: "center",
  overflowX: "auto",

  "&::-webkit-scrollbar": {
    height: "0.5rem",
  },

  "&::-webkit-scrollbar-thumb": {
    height: "0.5rem",
    maxWidth: "16rem",
    background: "#555555",
    borderRadius: "0.5rem",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: "#3B3B3B",
  },
});
