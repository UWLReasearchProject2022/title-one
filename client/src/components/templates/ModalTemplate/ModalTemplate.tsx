import React from "react";
import { StyledModal, CloseButton } from "./ModalTemplate.styles";
import { Close as CloseIcon } from "@mui/icons-material";
import { ModalProps } from "types";

type Props = ModalProps & {
  children: React.ReactNode;
  Container: React.FunctionComponent;
  fadeIn?: boolean;
};

export const ModalTemplate: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  children,
  Container,
  fadeIn,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: fadeIn
          ? {}
          : {
              transition: "none",
              transitionDelay: "0s",
              transitionDuration: "0s",
              transitionProperty: "none",
              transitionTimingFunction: "ease",
            },
      }}
    >
      <Container>
        {children}
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </Container>
    </StyledModal>
  );
};
