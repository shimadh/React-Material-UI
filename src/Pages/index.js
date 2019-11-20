import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Pages
import LoginPage from "./Login";
import Roles from "./Roles";
import Users from "./Users";

export default () => (
    <Switch>
      <Redirect from="/" to="/login" exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/users"  exact component={Users} />
      <Route path="/roles"  exact component={Roles} />
    </Switch>
);
