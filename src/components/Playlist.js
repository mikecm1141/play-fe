import React, { Component } from 'react';

import '../styles/playlist.css';

class Playlist extends Component {
  render() {
    const { playlist_name, songs } = this.props;
    const countLabel = songs.length > 1 ? 'tracks' : 'track';
    return(
      <div className="playlist-container">
        <div className="playlist-name">
          <strong>{playlist_name}</strong>
        </div>
        <div className="playlist-info">
          {songs.length} {countLabel}
        </div>
      </div>
    );
  }
}

export default Playlist;
