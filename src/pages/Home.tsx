import * as React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { CatalogItem } from "src/components/CatalogItem";
import { Header, Icon } from "semantic-ui-react";


export const Home = observer(() => {
  return (
    <div className="catalog catalog-wrapper">
      {Array.from("123".repeat(3)).map((item, idx) => {
        return (
          <Link to={`catalog/${item}`} className="catalog-item-link-wrapper">
            <CatalogItem id={item} key={idx} />
          </Link>
        );
      })}
      <Link to={`/catalog`} className="catalog-item-link-wrapper go">
        <Header as="h4" icon>
          <Icon name="arrow right" />
          See them all
        </Header>
      </Link>
    </div>
  );
});
