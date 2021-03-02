import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "./pages/dashBoard/DashBoard.jsx";
import history from "./History";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dash-board" />
          </Route>
          <Route exact path="/dash-board" component={DashBoard} />
        </Switch>
      </Router>
    );
  }
}
