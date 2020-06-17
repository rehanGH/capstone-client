//The store takes in the root-reducer containing all the reducers used

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import allGamesReducers from '../utilities/containers/AllGames'

const myStore = createStore(allGamesReducers, applyMiddleware(logger, thunk));

export default myStore;
