import React, { Component } from "react";
import { Header } from "./src/components/layout";
//import RoutesContainer from "./components/routes/RoutesContainer";
import "./App.css";
import { Provider } from "react-redux";
import myStore from "./store";
import GamesContainer from "./src/components/containers/GamesContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomeContainer} from "./src/components/containers";
import {Signup, Login} from "./src/components/auth/Signup"

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
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
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
