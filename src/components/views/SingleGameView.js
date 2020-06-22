import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleGameThunk } from '../../redux/utilities/SingleGame';

class SingleGameView extends Component {
  constructor(props){
    super(props);
    this.state = {
      oneGame: "",
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#191919", color: "white" }}>
        <h1
          className=" p-2 bd-highlight"
          style={{
            background: "#1e272c",
            border: "1px solid black",
            color: "white",
          }}
         > Game </h1>
          <div className="single-game"
              style={{ display: "flex", justifyContent: "space-evenely" }}
          >
            {this.props.singleGame.map((oneGame) =>{
              return (
                <div key={oneGame.id}>
                  <h3>o{oneGame.name}</h3>
                  <img
                    style={{
                      borderRadius: "20px",
                      width: "30em",
                      height: "20em",
                    }}
                    id="game-poster"
                    className="poster"
                    src={
                      oneGame.cover && oneGame.cover.url
                        ? oneGame.cover.url.replace("t_thumb", "t_720p")
                        : "https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                    }
                    alt=" Game over"
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    singleGame: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneGame: (oneGame) => dispatch(fetchSingleGameThunk(oneGame)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SingleGameView);
