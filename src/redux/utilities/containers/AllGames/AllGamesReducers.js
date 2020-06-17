import {
    FETCH_GAMES_SUCCESS,
} from './AllGamesTypes';


const allGamesReducers = (state = [], action ) {
  switch(action.type){
    case FETCH_GAMES_SUCCESS:
        return action.payload;
    default:
      return state;
  }
};

export default allGamesReducers;
