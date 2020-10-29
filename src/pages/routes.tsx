import React from "react";
import Landing from "./LandingPage";
import Login from "./Login";
import SignUp from "./SignUp";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
