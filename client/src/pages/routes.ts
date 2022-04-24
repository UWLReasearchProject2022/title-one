import React from "react";
import { Home } from "./Home";
import { Search } from "./Search";
import { Item } from "./Item";
import { Basket } from "./Basket";
import { Checkout } from "./Checkout";
import { Account } from "./Account";
import { AdminPortal } from "./AdminPortal";

export type AppRoute = {
  name: string;
  path: string;
  element: React.FunctionComponent;
};

export const routes: AppRoute[] = [
  {
    name: "Home",
    path: "/",
    element: Home,
  },
  {
    name: "Search",
    path: "/search",
    element: Search,
  },
  {
    name: "Item",
    path: "/search/:product_id",
    element: Item,
  },
  {
    name: "Basket",
    path: "/basket",
    element: Basket,
  },
  {
    name: "Checkout",
    path: "/checkout",
    element: Checkout,
  },
  {
    name: "Account",
    path: "/account",
    element: Account,
  },
  {
    name: "Admin portal",
    path: "/admin-portal",
    element: AdminPortal,
  },
];
