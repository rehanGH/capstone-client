import axios from 'axios';
//import SingleGameView from '../../components/views/SingleGameView';

const initialGameState = [];

const FETCH_SINGLE_GAME = "FETCH_SINGLE_GAME";

//Action Creators
const fetchSingleGame = (singleGame) => {
  return {
    type: FETCH_SINGLE_GAME,
     singleGame,
  };
};

//Thunk Creator
export const fetchSingleGameThunk = (oneGame) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search=${oneGame}&limit=1&fields=category,cover.url,name,similar_games,summary`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": "5d814ccfdde668d67c178b8cd959feff"
        },
        data:
        "limit : 1, fields category, cover.url, name, similar_games, summary;",
      });
      console.log({ data });
      dispatch(fetchSingleGame(data));
    }catch (error) {
      console.error(error);
    }
  };
};

//Reducer
const singleGameReducer = (state = initialGameState, action) => {
  switch(action.type) {
    case FETCH_SINGLE_GAME:
      return action.singleGame;
    default:
      return state;
  }
};

export default singleGameReducer;
