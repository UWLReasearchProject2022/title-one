import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "./BasketTable.styles";
import { BasketItem } from "types";
import { PriceTotal } from "components";
import { deleteFromBasket } from "utils/lib/deleteFromBasket";
import { getBasket } from "utils/lib/getBasket";

const columns: GridColDef[] = [
  {
    field: "product.name",
    headerName: "Product Name",
    flex: 1,
    valueGetter: (params) => params.row.product.name,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 1,
    editable: true,
  },
  {
    field: "product.price",
    headerName: "Price",
    flex: 1,
    valueGetter: (params) =>
      params.row.product.price.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      }),
  },
  {
    field: "total",
    headerName: "Subtotal",
    flex: 1,
    valueGetter: (params) =>
      (params.row.product.price * params.row.quantity).toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      }),
  },
  {
    field: "delete",
    headerName: "",
    flex: 1,
    renderCell: (params) => (
      <button onClick={() => deleteFromBasket(params.row.product)}>
        Delete
      </button>
    ),
  },
];

type Props = {
  basket: BasketItem[];
};

export const BasketTable: React.FunctionComponent<Props> = ({ basket }) => {
  return (
    <Container>
      <DataGrid
        rows={getBasket()}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        getRowId={(row) => row.product.id}
        hideFooterPagination
        components={{
          Footer: PriceTotal,
        }}
        componentsProps={{
          footer: { basket: basket },
        }}
      />
    </Container>
  );
};
