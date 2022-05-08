import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
  GridValueSetterParams,
} from "@mui/x-data-grid";
import {
  Container,
  Delete,
  DataCellText,
  StyledDataGrid,
  StyledIconButton,
} from "./BasketTable.styles";
import { PriceTotal } from "components";
import { useBasket } from "utils/lib/useBasket";
import { IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OpenInNew as LinkToIcon } from "@mui/icons-material";

export const BasketTable: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { basket, total, removeFromBasket, setQuantity } = useBasket();

  const columns: GridColDef[] = [
    {
      field: "product.name",
      headerName: "Product Name",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <DataCellText>
          {params.row.product.name}
          <StyledIconButton
            color="primary"
            onClick={() => navigate(`/search/${params.row.product.id}`)}
          >
            <LinkToIcon fontSize="small" />
          </StyledIconButton>
        </DataCellText>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.5,
      editable: true,
      valueSetter: (params: GridValueSetterParams) => {
        setQuantity(params.row.product.id, params.value);
        return params.value;
      },
    },
    {
      field: "product.price",
      headerName: "Price",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.product.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        }),
    },
    {
      field: "total",
      headerName: "Subtotal",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        (params.row.product.price * params.row.quantity).toLocaleString(
          "en-GB",
          {
            style: "currency",
            currency: "GBP",
          },
        ),
    },
    {
      field: "delete",
      headerName: "",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton onClick={() => removeFromBasket(params.row.product.id)}>
          <Delete />
        </IconButton>
      ),
    },
  ];

  return (
    <Container>
      <StyledDataGrid
        rows={basket}
        columns={[...columns]}
        pageSize={5}
        disableSelectionOnClick
        getRowId={(row) => row.product.id}
        hideFooterPagination
        components={{
          Footer: PriceTotal,
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              <DataCellText
                style={{ whiteSpace: "pre-line", textAlign: "center" }}
              >
                {
                  "Nothing in your basket!\nTake a look at some of our games on our search page"
                }
              </DataCellText>
            </Stack>
          ),
        }}
        componentsProps={{
          footer: { total: total },
        }}
      />
    </Container>
  );
};
