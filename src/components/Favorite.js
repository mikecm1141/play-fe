import React, { Component } from 'react';

import '../styles/favorite.css';

export default class Favorite extends Component {
  render() {
    const { name, artist_name, genre, song_rating } = this.props;
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
          <button>
            <i title="Remove Favorite" className="favorite-button fas fa-heart fa-fw"></i>
          </button>
          <button>
            <i title="Add to Playlist" className="playlist-button fas fa-music fa-fw"></i>
          </button>
        </div>
      </div>
    );
  }
}
