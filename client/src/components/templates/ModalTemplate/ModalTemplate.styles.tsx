import { styled } from "@mui/system";
import { Modal, IconButton } from "@mui/material";

export const StyledModal = styled(Modal)({
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
});

export const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});
