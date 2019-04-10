import React, { Component } from 'react';

import '../styles/playlist.css';

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTracks: false,
      iconClass: 'fas fa-chevron-circle-down'
    };

    this.trackDetails = this.trackDetails.bind(this);
    this.handleShowTracks = this.handleShowTracks.bind(this);
    this.filterNullSongs = this.filterNullSongs.bind(this);
  }

  handleShowTracks() {
    this.setState({ showTracks: !this.state.showTracks });
    if(!this.state.showTracks) {
      this.setState({ iconClass: 'fas fa-chevron-circle-up' });
    } else {
      this.setState({ iconClass: 'fas fa-chevron-circle-down' });
    }
  }

  filterNullSongs() {
    const { songs } = this.props;
    return songs.filter(song => song.id !== null);
  }

  trackDetails() {
    const songs = this.filterNullSongs();
    if(songs.length > 0) {
      return(
        songs.map(song => {
          return(
            <div className="tracks-container" key={song.id}>
              <div className="tracks-info">
                <div className="track-name">
                  <strong>{song.name}</strong>
                </div>
                <div className="track-artist">{song.artist_name}</div>
              </div>
              <div className="tracks-action">
                <i className="fas fa-minus-circle remove-track"></i>
              </div>
            </div>
          );
        })
      );
    } else {
      return(
        <div className="tracks-container">
          Playlist empty, add some tracks.
        </div>
      );
    }
  }

  render() {
    const { playlist_name } = this.props;
    const songs = this.filterNullSongs();
    const countLabel = songs.length === 1 ? 'track' : 'tracks';
    return(
      <div className="playlist-container">
        <div className="playlist-details-container" onClick={this.handleShowTracks}>
          <div className="playlist-name">
            <i className={this.state.iconClass}></i>&nbsp;
            <strong>{playlist_name}</strong>
          </div>
          <div className="playlist-info">
            {songs.length} {countLabel}
          </div>
        </div>
        <div className="track-details">
          {
            this.state.showTracks ? this.trackDetails() : null
          }
        </div>
      </div>
    );
  }
}

export default Playlist;
