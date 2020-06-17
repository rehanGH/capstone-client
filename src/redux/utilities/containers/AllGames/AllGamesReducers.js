// import {
//     FETCH_GAMES_REQUEST,
//     FETCH_GAMES_SUCCESS,
//     FETCH_GAMES_FAILURE
// } from './AllGamesTypes';
//
// //Initialize initial state
// const initialState = {
//   loading: false,
//   games: [],
//   error: ''
// }
//
//
// const allGamesReducers = ( state = initialState, action ) {
//   switch(action.type){
//     case FETCH_GAMES_REQUEST:
//       return {
//       ...state,
//       loading: true
//       }
//     case FETCH_GAMES_SUCCESS:
//       return {
//       loading: false,
//       games: [],
//       error: ''
//       }
//     case FETCH_GAMES_FAILURE:
//       return {
//         loading: false,
//         games: [],
//         error: action.payload
//       }
//     default return state
//   }
// }
//
// export default allGamesReducers;
