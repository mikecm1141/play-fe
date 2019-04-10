import React, { Component } from 'react';
import { connect } from 'react-redux';

import Playlist from './Playlist';

import { doFetchPlaylists } from '../actions/playlists';

import '../styles/playlists.css';

const mapStateToProps = state => ({
  playlists: state.playlistsState
});

const mapDispatchToProps = dispatch => ({
  onFetchPlaylists: () => dispatch(doFetchPlaylists())
});

class Playlists extends Component {
  componentDidMount() {
    this.props.onFetchPlaylists();
  }

  render() {
    const { playlists } = this.props.playlists;
    return(
      <div className="playlists-container">
        <div className="playlists-header">
          <div className="playlists-header-text">
            <h1>playlists.</h1>
            <h2>jams for every occasion</h2>
          </div>
        </div>
        <div className="fetch-data">
          {
            playlists.map(playlist => {
              return <Playlist {...playlist} key={playlist.id}/>
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
)(Playlists);
