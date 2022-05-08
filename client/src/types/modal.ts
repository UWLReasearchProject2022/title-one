import React, { SetStateAction } from "react";

export type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};
