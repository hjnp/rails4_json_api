import React from 'react';  

import { Switch, Route } from 'react-router-dom';


import HomePage from './components/home/HomePage';
import LoginPage from './components/Login/LoginPage';
import LogoutPage from './components/Logout/LogoutPage';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/logout" component={LogoutPage} />
  </Switch>
);


export default Routes;