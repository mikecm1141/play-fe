import React, { Component } from 'react';

import '../styles/navbar.css';

export default class NavBar extends Component {
  render() {
    return(
      <nav className="bottom-nav">
        <div>
          <a id="favorites" title="Favorite Songs" href="/favorites"><i className="far fa-heart fa-5x fa-fw"></i></a>
        </div>
        <div>
          <a id="search" title="Search Artists and Tracks" href="/"><i className="fas fa-search fa-5x fa-fw"></i></a>
        </div>
        <div>
          <a id="playlists" title="View Your Playlists" href="/playlists"><i className="fas fa-music fa-5x fa-fw"></i></a>
        </div>
      </nav>
    )
  }
}
