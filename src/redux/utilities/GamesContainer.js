import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGamesThunk } from "./AllGames";
import GamesView from "./GamesView";

//Smart container
class GamesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllGames();
    console.log("componentDidMount");
  }

  render() {
    return <GamesView allGames={this.props.allGames} />;
  }
}

// Map state to props
const mapStateToProps = (state) => {
  return {
    allGames: state.allGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGames: () => dispatch(fetchGamesThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
