import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ProductsList,
  ProductPage,
  PageNotFound,
  Header,
  Checkout,
} from "./index";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/products/:id" component={ProductPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
