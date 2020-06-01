import * as React from "react";
import { observer } from "mobx-react-lite";
import { CatalogItem } from "src/components/CatalogItem";
import { Link } from "react-router-dom";

export const Catalog = observer(() => {
  React.useEffect(() => window.scrollTo(0, 0));
  return (
    <div className="catalog catalog-wrapper">
      {Array.from("12".repeat(5)).map((item, idx) => {
        return (
          <Link to={`/catalog/${item}`} className="catalog-item-link-wrapper">
            <CatalogItem id={item} key={idx} />
          </Link>
        );
      })}
    </div>
  );
});
