import React, { Component } from 'react';

import { connect } from 'react-redux';

import { doFetchFavorites } from '../actions/favorites';
import '../styles/favorites.css';

import Favorite from './Favorite';

const mapStateToProps = state => ({
  favorites: state.favoritesState
});

const mapDispatchToProps = dispatch => ({
  onFetchFavorites: () => dispatch(doFetchFavorites())
})

class Favorites extends Component {
  componentDidMount() {
    this.props.onFetchFavorites();
  }

  render() {
    const { favorites } = this.props.favorites;
    return(
      <div className="favorites-container">
        <div className="favorites-header">
          <div className="favorites-header-text">
            <h1>favorites.</h1>
            <h2>songs you can't live without</h2>
          </div>
        </div>
        <div className="fetch-data">
          {
            favorites.map(favorite => {
              return <Favorite {...favorite} key={favorite.id} />
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
