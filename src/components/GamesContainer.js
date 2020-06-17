//import React, { useEffect } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchGames from '../redux/thunks';
import GamesView from './views'

//Smart container
class GamesContainer extends Component {
    componentDidMount(){
      this.props.fetchGames();
    }
    render() {
      return (
        <GamesView
          allGames = {this.props.allGames}
        />
      );
    }
}

const mapStateToProps = (state) => {
  return {
    allGames: state.allGames
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(fetchGames())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(GamesContainer);
