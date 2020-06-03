import React from "react";
import { ProductsStore } from "./ProductsStore";
import { RoutesStore } from './RoutesStore';

export const storesContext = React.createContext({
  productsStore: new ProductsStore(),
  routesStore: new RoutesStore(),
  // themeStore: new ThemeStore(),
});
