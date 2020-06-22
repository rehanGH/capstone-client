import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchSingleGameThunk from '../../redux/utilities/SingleGame';
import SingleGameView from './views/SingleGameView';

//Smart container
class SingleGameContainer extends Component {
  componentDidMount() {
    this.props.fetchSingleGame();
    console.log("componentDidMount");
  }
  render() {
    return <SingleGameView singleGame={this.props.singleGame} />
  }
}

//Map state to mapStateToProps
const mapStateToProps = (state) => {
  return {
    singleGame: state.singleGame,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleGame: () => dispatch(fetchSingleGameThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGameContainer);
