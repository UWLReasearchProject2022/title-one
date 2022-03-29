import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  color: "#CCCCCC",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const Text = styled(Typography)({
  height: "1rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "16px",
});
