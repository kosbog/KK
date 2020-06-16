import React from "react";
import { ProductsStore } from "./ProductsStore";
import { RoutesStore } from './RoutesStore';
import { AuthStore } from './AuthStore';

export const storesContext = React.createContext({
  productsStore: new ProductsStore(),
  routesStore: new RoutesStore(),
  authStore: new AuthStore(),
});
