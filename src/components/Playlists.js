import React, { Component } from 'react';

import '../styles/playlists.css';

class Playlists extends Component {
  render() {
    return(
      <div className="playlists-container">
        <div className="playlists-header">
          <div className="playlists-header-text">
            <h1>playlists.</h1>
            <h2>jams for every occasion</h2>
          </div>
        </div>
        <div className="fetch-data">
          Playlists here.
        </div>
      </div>
    )
  }
}

export default Playlists;
