import React, { Component } from "react";
import { Header } from "./components/layout";
//import RoutesContainer from "./components/routes/RoutesContainer";
import "./App.css";
import { Provider } from "react-redux";
import GamesView from "./redux/utilities/GamesView";
import myStore from "./redux/store";
import GamesContainer from "./redux/utilities/GamesContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  LoginContainer,
  HomeContainer,
  RegisterContainer,
} from "./components/containers";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <header className="app-header">
            <RoutesContainer />
          </header> */}

          <Switch>
            <Route path="/register" component={RegisterContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/" component={HomeContainer} />
          </Switch>
        </div>
        <Provider store={myStore}>
          <div className="App">
            <GamesContainer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
