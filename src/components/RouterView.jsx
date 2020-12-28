import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home.jsx";
import Test from "../views/Test.jsx";

class RouterView extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Switch>
      </main>
    );
  }
}

export default RouterView;
