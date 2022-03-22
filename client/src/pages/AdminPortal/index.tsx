import React from "react";
import { PageTemplate, Placeholder } from "components";
import { Typography } from "@mui/material";

export const AdminPortal: React.FunctionComponent = () => {
  return (
    <PageTemplate>
      <Placeholder>
        <Typography color={"primary"}>Admin portal</Typography>
      </Placeholder>
    </PageTemplate>
  );
};
