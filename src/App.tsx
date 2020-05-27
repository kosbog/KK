import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = observer(() => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/catalog" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
});
