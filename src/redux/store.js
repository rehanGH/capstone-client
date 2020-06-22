//Constructing our redux store

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import gameReducer from './utilities/AllGames';
import singleGameReducer from './utilities/SingleGame';
//import rootReducer from './rootReducer';

//The store
//const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
const myStore = createStore(gameReducer,middleware);

export default myStore;
