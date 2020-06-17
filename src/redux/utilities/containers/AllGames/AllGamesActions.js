// import {
//     FETCH_GAMES_REQUEST,
//     FETCH_GAMES_SUCCESS,
//     FETCH_GAMES_FAILURE
// } from './AllGamesTypes';
//
// import axios from 'axios';

// export const fetchGamesRequest = () => {
//   return {
//     type: FETCH_GAMES_REQUEST
//   }
// }
//
// const fetchGamesSuccess = games => {
//   return {
//     type: FETCH_GAMES_SUCCESS,
//     payload: games
//   }
// }
//
// const fetchGamesFailure = error => {
//   return {
//     type: FETCH_GAMES_FAILURE,
//     payload: error
//   }
// }
//   //Thunk creators
// // export const fetchGames = () => {
//   return (dispatch) => {
//     dispatch(fetchGamesRequest)
//     axios.get(url)
//          .then(response => {
//            const games = response.data
//            dispatch(fetchGamesSuccess(games))
//           })
//          .catch(error => {
//            const errorMessage = error.message
//            dispatch(fetchGamesFailure(errorMessage))
//          })
//   }
// }
