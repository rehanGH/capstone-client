//Constructing our redux store

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './utilities/userReducer'
import gameReducer from "./utilities/AllGames"
// Individual reducers altogether under an alias;

//The store
const reducer = combineReducers({user, gameReducer})
const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(reducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
export * from './utilities/userReducer'
export * from './utilities/AllGames'
