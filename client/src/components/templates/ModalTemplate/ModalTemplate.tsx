import React, { SetStateAction } from "react";
import { StyledModal, CloseButton } from "./ModalTemplate.styles";
import { Close as CloseIcon } from "@mui/icons-material";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  Container: React.FunctionComponent;
};

export const ModalTemplate: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  children,
  Container,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <Container>
        {children}
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </Container>
    </StyledModal>
  );
};
