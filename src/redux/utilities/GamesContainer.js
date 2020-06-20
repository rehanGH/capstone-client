import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGamesThunk } from "./AllGames";
import { fetchCoversThunk } from "./AllGames";
import GamesView from "./GamesView";

//Smart container
class GamesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllGames();
    this.props.fetchCovers();
    console.log("componentDidMount");
  }

  render() {
    return (
      <GamesView
        allGames={this.props.allGames}
        allCovers={this.props.allCovers}
      />
    );
  }
}

// Map state to props
const mapStateToProps = (state) => {
  return {
    allGames: state.allGames,
    allCovers: state.allCovers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchGamesThunk()),
    fetchCovers: () => dispatch(fetchCoversThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
