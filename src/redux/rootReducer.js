import { combineReducers } from 'redux';
import gameReducer from './utilities/AllGames';
import singleGameReducer from './utilities/SingleGame';

const rootReducer = combineReducers({
  gameReducer,
  singleGameReducer
})

export default rootReducer;
