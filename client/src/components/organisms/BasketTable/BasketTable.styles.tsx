import { styled } from "@mui/system";
import { IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

export const Container = styled(Paper)({
  height: "calc(100vh - 15rem)",
  width: "calc(72.5% - 4rem)",
  padding: "1.5rem",
  marginRight: "1rem",
});

export const StyledDataGrid = styled(DataGrid)({
  border: "none",
  "& .MuiDataGrid-cell": {
    borderColor: "#2d2d2d",
  },
  "& .MuiDataGrid-columnHeaders": {
    borderColor: "#2d2d2d",
    pointerEvents: "none",
  },
  "& .MuiDataGrid-iconSeparator": {
    color: "#2d2d2d",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "normal",
    fontSize: "16px",
  },
  "& .MuiDataGrid-cellContent": {
    fontSize: "14px",
  },
  "& .MuiIconButton-sizeSmall": {
    visibility: "hidden",
  },
});

export const Delete = styled(DeleteIcon)({
  color: "#CCCCCC",
});

export const DataCellText = styled(Typography)({
  color: "#CCCCCC",
  fontSize: "14px",
});

export const StyledIconButton = styled(IconButton)({
  padding: "0rem",
  marginLeft: "0.5rem",
  marginBottom: "0.25rem",
});
