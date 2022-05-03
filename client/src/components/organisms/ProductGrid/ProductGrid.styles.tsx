import { styled } from "@mui/system";

const columns = 2;
const columnWidth = 350;

export const Container = styled("div")({
  width: "calc(100% - 22rem)",
  marginLeft: "auto",
  display: "grid",
  flexDirection: "row",
  gridTemplateColumns: `repeat(auto-fit, minmax(clamp(100%/ (${columns} + 1) + 0.1%, ${columnWidth}px, 100%), 1fr))`,
  height: "100%",
});
