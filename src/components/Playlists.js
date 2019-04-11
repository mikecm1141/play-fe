import React, { Component } from 'react';
import { connect } from 'react-redux';

import Playlist from './Playlist';

import { doFetchPlaylists, doPostPlaylist } from '../actions/playlists';

import '../styles/playlists.css';

const mapStateToProps = state => ({
  playlists: state.playlistsState
});

const mapDispatchToProps = dispatch => ({
  onFetchPlaylists: () => dispatch(doFetchPlaylists()),
  onPostPlaylist: (playlistName) => dispatch(doPostPlaylist(playlistName))
});

class Playlists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.onFetchPlaylists();
  }

  handleChange(e) {
    this.setState({ playlistName: e.target.value });
  }

  handleClick() {
    this.props.onPostPlaylist(this.state.playlistName);
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
          <div className="search-field">
            <input type="text"
                   id="playlist-name"
                   placeholder="add a new playlist"
                   onChange={this.handleChange}
            />
            <button className="search-button"
                    id="artist-search"
                    type="button"
                    name="search"
                    onClick={this.handleClick}
            >
              <i className="searchy fas fa-music fa-5x fa-fw"></i>
            </button>
          </div>
        </div>
        <div className="fetch-data">
          {
            playlists.map(playlist => {
              return <Playlist {...playlist} 
                               key={playlist.id}
                               refreshPlaylists={this.props.onFetchPlaylists}
                      />
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
