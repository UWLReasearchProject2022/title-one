import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export const Container = styled(Paper)({
  height: "30em",
  padding: "1.5em",
  backgroundColor: "#101010",
});

export const Delete = styled(DeleteIcon)({
  color: "#CCCCCC",
});

export const ProductLink = styled(Link)({
  color: "#CCCCCC",
});
