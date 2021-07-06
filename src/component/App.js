import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { ProductsList, ProductPage } from "./index";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/products/:id" component={ProductPage} />

        <Route component={PageNotFound} />
        <ProductsList />
      </Switch>
    </div>
  );
}

export default App;
