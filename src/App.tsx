import React from "react";
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

export const App = observer(() => {
  return (
    <>
      <Router>
        <Logo />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/catalog" component={About} /> */}
          <Route
            path="/catalog/:id"
            render={(props: RouteComponentProps<{ id: string }>) => (
              <CatalogItem
                id={props.match.params.id}
                isPage={true}
                classNames="catalog-item-container"
              />
            )}
          />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
        <p style={{height: 20}}></p>
      </Router>
    </>
  );
});
