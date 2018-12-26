import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Error404 from "./views/Error404";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="*" component={Error404} />
  </Switch>
);
