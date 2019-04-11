import React, { Component } from 'react';

import '../styles/playlist_modal.css';

export default class PlaylistModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: '-1',
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ playlist: e.target.value, error: null });
  }

  handleClick() {
    const { playlist } = this.state;
    const { addToPlaylist, favorite, closeModal } = this.props;

    if(playlist === '-1') {
      this.setState({ error: 'Select a valid playlist.' });
      return;
    }

    addToPlaylist(parseInt(playlist), favorite.id);
    closeModal();
  }

  render() {
    const { closeModal, playlists, favorite } = this.props;
    const { error } = this.state;
    return(
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <div className="modal-header-text">
              <h1>add to playlist.</h1>
              <h2>add <em>{favorite.name}</em> to selected playlist below</h2>
            </div>
          </div>
          <div className="modal-content">
            <div className="playlist-field">
              <select onChange={this.handleChange}>
                <option value="-1">Select Playlist...</option>
                {
                  playlists.map(playlist => {
                    return(
                      <option
                        key={playlist.id}
                        value={playlist.id}>
                        {playlist.playlist_name}
                      </option>
                    )
                  })
                }
              </select>
              <button onClick={this.handleClick}>
                <i className="fas fa-music fa-5x fa-fw"></i>
              </button>
            </div>
              {
                error && <div className="playlist-error">{error}</div>
              }
          </div>
          <div className="modal-footer">
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
