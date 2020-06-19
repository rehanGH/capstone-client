import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginContainer, HomeContainer } from "../containers";

const RoutesView = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesView;
