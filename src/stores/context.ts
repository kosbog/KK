import React from "react";
import { ProductsStore } from "./ProductsStore";
import { RoutesStore } from './RoutesStore';
// import { AdminStore } from './AdminStore';

export const storesContext = React.createContext({
  productsStore: new ProductsStore(),
  routesStore: new RoutesStore(),
  // adminStore: new AdminStore(),
});
