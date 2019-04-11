import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doDeletePlaylistFavorite } from '../actions/playlists';

import '../styles/playlist.css';

const mapDispatchToProps = dispatch => ({
  onDeletePlaylistTrack: (playlistId, favoriteId) => dispatch(doDeletePlaylistFavorite(playlistId, favoriteId)),
});

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTracks: false,
      iconClass: 'fas fa-chevron-circle-down',
      refreshList: false
    };

    this.trackDetails = this.trackDetails.bind(this);
    this.handleShowTracks = this.handleShowTracks.bind(this);
    this.filterNullSongs = this.filterNullSongs.bind(this);
    this.handleRemoveTrack = this.handleRemoveTrack.bind(this);
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

  handleRemoveTrack(favoriteId) {
    this.props.onDeletePlaylistTrack(this.props.id, favoriteId);
    this.props.refreshPlaylists();
    this.setState({ refreshList: !this.state.refreshList });
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
              <div className="track-action">
                <button onClick={() => this.handleRemoveTrack(song.id)}>
                  <i
                    className="fas fa-minus-circle remove-track"
                  ></i>
                </button>
              </div>
            </div>
          );
        })
      );
    } else {
      return(
        <div className="tracks-container">
          <p>Playlist empty, add some tracks.</p>
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
            <p>{songs.length} {countLabel}</p>
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

export default connect(
  undefined,
  mapDispatchToProps
)(Playlist);
