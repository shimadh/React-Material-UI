import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Users from "./Pages/Users";
import Roles from "./Pages/Roles";

export default () => (
    <Switch>
      <Route path="/users"                exact component={Users} />
      <Route path="/roles"                exact component={Roles} />
    </Switch>
);
