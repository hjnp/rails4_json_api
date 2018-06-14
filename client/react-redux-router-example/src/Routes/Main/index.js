import React from "react";
import { Switch, Route } from "react-router-dom";

import home from "../../home";
import about from "../../about";
import login from "../../login";

import PrivateRoute from "../shared/PrivateRoute";
import AuthService from '../../service/Auth.service';

export const Main = () => {
  const Auth = new AuthService();

  return (
    <Switch>
      {/* <Route exact path="/" component={home} /> */}

      <PrivateRoute exact authed={Auth.loggedIn()}  path="/" component={home} />
      <Route exact path="/about-us" component={about} />
      <Route exact path="/login" component={login} />
    </Switch>
  );
};

