import React, { Component } from 'react';

import '../styles/playlist_modal.css';

export default class PlaylistModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ playlist: e.target.value });
  }

  render() {
    const { closeModal, playlists, favorite } = this.props;
    return(
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <div className="modal-header-text">
              <h1>add to playlist.</h1>
              <h2>add {favorite.name} to selected playlist below</h2>
            </div>
          </div>
          <div className="modal-content">
            <select onChange={this.handleChange}>
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
            <button>
              <i className="fas fa-music fa-5x fa-fw"></i>
            </button>
          </div>
          <div className="modal-footer">
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
