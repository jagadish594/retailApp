import React, { Component } from "react";
import ListPage from "./pages/ListPage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "0",
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/ProductDetails/:itemId" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
