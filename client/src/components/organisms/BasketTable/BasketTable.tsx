import React from "react";
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
import { IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OpenInNew as LinkToIcon } from "@mui/icons-material";
import { BasketItem } from "types";

type Props = {
  basket: BasketItem[];
  total: number;
  removeFromBasket: (_: number) => void;
  setQuantity: (_: number, __: number) => void;
};

export const BasketTable: React.FunctionComponent<Props> = ({
  basket,
  total,
  removeFromBasket,
  setQuantity,
}) => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "product.name",
      headerName: "Product Name",
      flex: 1.25,
      renderCell: (params: GridRenderCellParams) => (
        <DataCellText>
          {params.row.productPlatform.product.name}
          <StyledIconButton
            color="primary"
            onClick={() =>
              navigate(
                `/search/${params.row.productPlatform.product_platform_id}`,
              )
            }
          >
            <LinkToIcon fontSize="small" />
          </StyledIconButton>
        </DataCellText>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.75,
      editable: true,
      valueSetter: (params: GridValueSetterParams) => {
        setQuantity(
          params.row.productPlatform.product_platform_id,
          params.value,
        );
        return params.value;
      },
    },
    {
      field: "product.price",
      headerName: "Price",
      flex: 0.75,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.productPlatform.price.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        }),
    },
    {
      field: "total",
      headerName: "Subtotal",
      flex: 0.75,
      valueGetter: (params: GridValueGetterParams) =>
        (params.row.productPlatform.price * params.row.quantity).toLocaleString(
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
      width: 60,
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
        getRowId={(row) => row.productPlatform.product_platform_id}
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
