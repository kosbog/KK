import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Logo } from "./components/Logo";
import { CatalogItem } from "./components/CatalogItem";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Catalog } from "src/pages/Catalog";
import { Version } from "./components/Version";
import { useStores } from "./utils/hooks";

export const App = observer(() => {
  const { productsStore } = useStores();

  React.useEffect(() => {
    (async () => {
      await productsStore.fetch();
    })();
    console.log("hook");
    return () => {};
  }, [productsStore]);

  console.log(productsStore.jackets);
  return (
    <>
      <div className="content">
        <Version />
        <Router>
          <Logo />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalog/:category" exact component={Catalog} />
            <Route
              path="/catalog/:category/:id"
              exact
              render={(
                props: RouteComponentProps<{ id: string; category: string }>
              ) => (
                <CatalogItem
                  {...props}
                  id={props.match.params.id}
                  category={props.match.params.category}
                  isPage={true}
                  classNames="catalog-item-container"
                />
              )}
            />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
});
