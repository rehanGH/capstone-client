import React, { Component } from "react";
import "./App.css";

import GamesContainer from './components';

export class App extends Component {
  render() {
    return(
      <div className="App">
        <GamesContainer />
      </div>
    );
  }
}

export default App;
