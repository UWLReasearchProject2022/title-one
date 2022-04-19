import { styled } from "@mui/system";
import { Paper, Tabs, Tab } from "@mui/material";

export const Container = styled(Paper)({
  marginTop: "1rem",
  marginBottom: "2rem",
});

export const StyledTabs = styled(Tabs)({
  "& .MuiTabs-flexContainer": {
    justifyContent: "space-around",
    height: "50px",
  },
  "& .MuiTabs-indicator": {
    height: "1px",
  },
});

export const StyledTab = styled(Tab)({
  textTransform: "none",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  borderRadius: "0.5rem",
  "& .MuiTouchRipple-root": {
    top: "0.5rem",
    left: "0.5rem",
    bottom: "0.5rem",
    right: "0.5rem",
  },
});

export const TabContainer = styled("div")({
  padding: "2rem",
});
