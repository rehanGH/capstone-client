//Constructing our redux store

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import gameReducer from './utilities/AllGames'

//The store
//const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
const myStore = createStore(gameReducer, middleware);

export default myStore;
