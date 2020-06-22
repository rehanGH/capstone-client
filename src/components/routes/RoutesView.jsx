import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Login,
  Signup,
  HomeContainer,
  GamesContainer,
  UserHome,
} from "../containers";
import { ProfileView, Header } from "../layout";
import { Provider } from "react-redux";
import store from "../../store";

const RoutesView = () => {
  return (
    <BrowserRouter>
      <Header />
      <Provider store={store}>
        <div className="App">
          <UserHome />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/profile" component={ProfileView} />
            <Route path="/" component={HomeContainer} />
            <GamesContainer />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default RoutesView;
