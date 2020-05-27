import React from "react";
import { ProductsStore } from "./ProductsStore";

export const storesContext = React.createContext({
  productsStore: new ProductsStore(),
  // themeStore: new ThemeStore(),
});
