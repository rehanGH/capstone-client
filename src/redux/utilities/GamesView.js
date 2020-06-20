import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGameThunk } from "./AllGames";
import { fetchCoversThunk } from "./AllGames";

class GamesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchGame(this.state.input);
  }

  render() {
    return (
      <div>
        <h1
          className="d-inline-flex p-2 bd-highlight"
          style={{
            borderRadius: "8px",
            background: "green",
            border: "1px solid green",
            color: "white",
          }}
        >
          GAMES
        </h1>
        <div className="all-games row ">
          {this.props.allCovers.map((cover) => {
            return (
              <div className="col" style={{ marginTop: "100px" }}>
                <img
                  id="game-poster"
                  class="poster"
                  src={`//images.igdb.com/igdb/image/upload/t_720p/${cover.image_id}.jpg`}
                  alt=""
                ></img>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={this.onSubmit}
          class="form-inline my-2 my-lg-0 d-flex justify-content-center"
        >
          <input
            onChange={this.onChange}
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search for a game here!"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <div className="all-games row ">
          {this.props.allGames.map((game) => {
            return (
              <div key={game.id} className="col" style={{ marginTop: "100px" }}>
                <h4>{game.name}</h4>
                <img id="game-poster" class="poster" alt=""></img>
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
    allGames: state,
    allCovers: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: (input) => dispatch(fetchGameThunk(input)),
    fetchCover: () => dispatch(fetchCoversThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesView);
