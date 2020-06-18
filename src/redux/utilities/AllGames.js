import axios from 'axios';

const initialState = [];

const FETCH_GAMES = 'FETCH_GAMES';

//Action Creator
const fetchAllGames = games => {
    return {
        type: FETCH_GAMES,
        games,
    };
};

//Thunk creators
export const fetchGamesThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get({
                url: "https://api-v3.igdb.com/games",
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'user-key': 'f76ac52bac1a9fb71d4fc1a78d09e8cb'
                },
                data: "fields category,cover,created_at,dlcs,expansions,first_release_date,franchise,franchises,genres,keywords,name,parent_game,platforms,player_perspectives,popularity,rating,rating_count,release_dates,screenshots,similar_games,standalone_expansions,status,storyline,summary,tags,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
            })
            console.log({ data })
        } catch (error) {
            console.error(error)
        }
    }
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return action.games;
        default:
            return state;
    }
};

export default gameReducer;