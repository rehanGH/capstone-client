import React, { Component } from "react";
import { Header, ProfileView} from "./components/layout";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomeContainer, GamesContainer, UserHome} from "./components/containers";
import {Signup, Login} from "./components/containers"

export class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Provider store={store}>
        <div className="App">
          <Header />
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
  }
}

export default App;
