import React, { useState } from "react";
import { Input } from "./PasswordInput.styles";
import { TextFieldProps, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordInput: React.FunctionComponent<TextFieldProps> = (
  props,
) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      label="Password"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                setVisible(!visible);
              }}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
            >
              {visible ? (
                <VisibilityOff fontSize="small" />
              ) : (
                <Visibility fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
