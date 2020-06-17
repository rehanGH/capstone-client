import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';

import GamesView from '../components/views';
import myStore from './redux/store'

export class App extends Component {
  render() {
    return(
    <Provider store={myStore}>
      <div className="App">
        <GamesView />
      </div>
    </Provider>
    );
  }
}

export default App;
