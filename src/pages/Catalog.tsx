import * as React from "react";
import { observer } from "mobx-react-lite";
import { CatalogItem } from "src/components/CatalogItem";

export const Catalog = observer(() => {
  return (
    <div className="catalog-wrapper">
      {Array.from('12'.repeat(5)).map((item, idx) => {
        return <CatalogItem id={item} key={idx} />;
      })}
    </div>
  );
});
