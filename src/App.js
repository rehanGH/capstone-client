import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';

import GamesView from './components/views/gamesView';
import myStore from './redux/store';
import GamesContainer from './components/GamesContainer';

export class App extends Component {
    render() {
        return ( <
            Provider store = { myStore } >
            <
            div className = "App" >
            <
            GamesView / >
            <
            GamesContainer / >
            <
            /div> < /
            Provider >
        );
    }
}

export default App;