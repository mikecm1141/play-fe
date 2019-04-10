import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doRemoveFavorite } from '../actions/favorites';

import '../styles/favorite.css';

const mapDispatchToProps = dispatch => ({
  onRemoveFavorite: (favoriteId) => dispatch(doRemoveFavorite(favoriteId))
});

class Favorite extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRemoveFavorite(this.props.id);
  }

  render() {
    const { id, name, artist_name, genre, song_rating } = this.props;
    return(
      <div className="favorite-container">
        <div>
          <p className="favorite-title">{name}</p>
          <p className="favorite-info">
            <strong>Artist:</strong> {artist_name} |&nbsp;
            <strong>Genre:</strong> {genre} |&nbsp;
            <strong>Rating:</strong> {song_rating}
          </p>
        </div>
        <div className="favorite-actions">
          <button onClick={this.handleClick}>
            <i title="Remove Favorite" className="favorite-button fas fa-heart fa-fw"></i>
          </button>
          <button onClick={() => {this.props.openModal(id)}}>
            <i title="Add to Playlist" className="playlist-button fas fa-music fa-fw"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Favorite);
