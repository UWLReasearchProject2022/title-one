import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Container, Delete } from "./BasketTable.styles";
import { PriceTotal } from "components";
import { useBasket } from "utils/lib/useBasket";
import { IconButton } from "@mui/material";

export const BasketTable: React.FunctionComponent = () => {
  const { basket, total, removeFromBasket } = useBasket();

  const columns: GridColDef[] = [
    {
      field: "product.name",
      headerName: "Product Name",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) => params.row.product.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.5,
      editable: true,
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

  console.log(total);

  return (
    <Container>
      <DataGrid
        rows={basket}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        getRowId={(row: any) => row.product.id}
        hideFooterPagination
        components={{
          Footer: PriceTotal,
        }}
        componentsProps={{
          footer: { total: total },
        }}
      />
    </Container>
  );
};
