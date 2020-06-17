import {
    FETCH_GAMES_SUCCESS
} from './AllGamesTypes';

import axios from 'axios';

const fetchGamesSuccess = games => {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload: games
  }
}

   //Thunk creators
 export const fetchGames = () => (dispatch) => {
  return axios({
      url: "https://api-v3.igdb.com/games",
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'user-key': 'f76ac52bac1a9fb71d4fc1a78d09e8cb'
      },
      data: "fields category,cover,created_at,dlcs,expansions,first_release_date,franchise,franchises,genres,keywords,name,parent_game,platforms,player_perspectives,popularity,rating,rating_count,release_dates,screenshots,similar_games,standalone_expansions,status,storyline,summary,tags,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
         .then(response => response.data)
         .then((games) => dispatch(fetchGames(games)))
         .catch((error) => console.log(error))
}
