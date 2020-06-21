import React, { Component } from "react";
import { Header } from "./components/layout";
//import RoutesContainer from "./components/routes/RoutesContainer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomeContainer, GamesContainer} from "./components/containers";
import Routes from "./components/containers/routes"


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div>
            <Routes />
          </div>
        )
      }
      <HomeContainer/>
      </div>
        {/* </div> */}
        <Provider store={store}>
          <div className="App">
            <GamesContainer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
