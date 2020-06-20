import axios from "axios";
import GamesView from "../../components/layout/GamesView"

const initialState = [];

const FETCH_GAMES = "FETCH_GAMES";
const SEARCH_GAMES = "SEARCH_GAMES";
const FETCH_GAME = "FETCH_GAME";
const FETCH_COVER = "FETCH_COVER";

//Action Creator
const fetchAllGames = (games) => {
  return {
    type: FETCH_GAMES,
    games,
  };
};
const fetchCover = (cover) => {
  return {
    type: FETCH_COVER,
    cover,
  };
};

// Thunk Creators
export const fetchGameThunk = (input) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search=${input}&limit=100&fields=*`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": "5d814ccfdde668d67c178b8cd959feff",
        },
        data:
          "limit: 500; fields category,cover.url,first_release_date,genres,name,platforms,popularity,rating,rating_count,release_dates,screenshots,storyline,summary,tags,total_rating,total_rating_count,url;",
      });
      console.log({ data });
      dispatch(fetchAllGames(data));
    } catch (error) {
      console.error(error);
    }
  };
};
//Thunk creators
export const fetchGamesThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url:
          "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": "5d814ccfdde668d67c178b8cd959feff",
        },
        data:
          "limit: 5; fields category,cover.url,first_release_date,genres,name,platforms,popularity,rating,rating_count,release_dates,screenshots,storyline,summary,tags,total_rating,total_rating_count,url;",
      });
      console.log({ data });
      dispatch(fetchAllGames(data));
    } catch (error) {
      console.error(error);
    }
  };
};
// export const fetchCoversThunk = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios({
//         url:
//           "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "user-key": "5d814ccfdde668d67c178b8cd959feff",
//         },
//         data:
//           "fields alpha_channel,animated,checksum,game,height,image_id,url,width;",
//       });
//       console.log({ data });
//       dispatch(fetchCover(data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return action.games;
    case SEARCH_GAMES:
      return action.game;
    case FETCH_COVER:
      return action.cover;
    default:
      return state;
  }
};

export default gameReducer;