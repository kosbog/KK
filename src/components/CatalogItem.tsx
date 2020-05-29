import * as React from "react";
import { observer } from "mobx-react-lite";
import { Image, Header } from "semantic-ui-react";
import product1 from "../assets/images/products/1.jpg";
import product2 from "../assets/images/products/2.jpg";

export const CatalogItem = observer(({ id }: { id: string }) => {
  const p1 = {
    content: "Bicker leather jacket",
    subheader: "$699",
  };
  const p2 = {
    content: "Bomber leather jacket",
    subheader: "$450",
  };
  return (
    <div className="catalog-item">
      <Image src={id === "1" ? product1 : product2} fluid />
      <Header as="h4" className="catalog-item-header" {...id === "1" ? p1 : p2} />
    </div>
  );
});
