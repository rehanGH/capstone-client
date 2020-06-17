import React from 'react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux ';
import fetchGames from '../redux/utilities/containers/AllGames/AllGamesActions';

function GameContainer({ fetchGames, gamesData }) {
  useEffect(() => {
    fetchGames()
  }, [])

  return gamesData.loading ? (
    <h2> Loading </h2>
  ) : gamesData.error ? (
    <h2> {gamesData.error} </h2>
  ) : (
    <div className="games-grid">
      <h2> Trending Games </h2>
        <div>
          {
            gamesData && gamesData.games && gamesData.games.map(game => <p> {game.name}</p>)
          }
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gamesData: state.games
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () dispatch(fetchGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
