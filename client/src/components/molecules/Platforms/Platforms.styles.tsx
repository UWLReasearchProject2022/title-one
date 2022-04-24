import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const Container = styled("div")({
  width: "calc(100% - 2.5rem)",
  height: "2.5rem",
  padding: "2rem",
  display: "flex",
  justifyContent: "space-evenly",
});

export const PlatformContainer = styled(Link)({
  height: "100%",
  width: "calc(25% - 3rem)",
  maxWidth: "16rem",
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
});

export const PlatformImage = styled("img")({
  width: "100%",
  height: "100%",
  borderColor: "white",
  borderRadius: "0.5rem",
  borderStyle: "solid",
  objectFit: "cover",
  objectPosition: "center",
  pointerEvents: "none",
});
