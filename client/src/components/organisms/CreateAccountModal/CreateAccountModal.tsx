import React from "react";
import { ModalTemplate } from "components";
import { Container } from "./CreateAccountModal.styles";
import { ModalProps } from "types";

export const CreateAccountModal: React.FunctionComponent<ModalProps> = ({
  open,
  setOpen,
}) => {
  return (
    <ModalTemplate open={open} setOpen={setOpen} Container={Container}>
      3cvx cvfdvcdfbgr
    </ModalTemplate>
  );
};
