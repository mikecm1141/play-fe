import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchArtists } from '../actions/artists';
import { doFetchTracks } from '../actions/tracks';

import Artist from './Artist';
import Track from './Track';

import '../styles/search.css';

const mapStateToProps = state => ({
  artistsState: state.artistsState,
  tracksState: state.tracksState
});

const mapDispatchToProps = dispatch => ({
  onFetchArtists: (artistName) =>  dispatch(doFetchArtists(artistName)),
  onFetchTracks: (artistId) => dispatch(doFetchTracks(artistId))
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: '',
      showArtists: false,
      showTracks: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTrackShow = this.handleTrackShow.bind(this);
  }

  handleChange(e) {
    this.setState({ artistName: e.target.value });
  }

  handleClick(e) {
    this.props.onFetchArtists(this.state.artistName);
    this.setState({ showArtists: true, showTracks: false });
  }

  handleTrackShow(artistId) {
    this.setState({ showArtists: false, showTracks: true });
    this.props.onFetchTracks(artistId);
  }

  render() {
    const { artistsState, tracksState } = this.props;
    return(
      <div className="search-container">
        <div className='search-header'>
          <div className="search-header-text">
            <h1>search.</h1>
          </div>
          <div className="search-field">
            <input type="text"
                   id="artist-search-name"
                   placeholder="got an artist in mind?"
                   onChange={this.handleChange}
            />
            <button className="search-button"
                    id="artist-search"
                    type="button"
                    name="search"
                    onClick={this.handleClick}
            >
              <i className="searchy fas fa-search fa-5x fa-fw"></i>
            </button>
          </div>

          <div className="songs-header">
            <h2>browse available artists</h2>
          </div>
        </div>
        <div className="fetch-data">
          {
            artistsState.artists.length > 0 && this.state.showArtists &&
            artistsState.artists.map(artist => {
              return(
                <Artist key={artist.artist.artist_id}
                        artist={artist.artist}
                        handleTrackShow={this.handleTrackShow}
                />
              )
            })
          }
          {
            tracksState.tracks.length > 0 && this.state.showTracks &&
            tracksState.tracks.map(track => {
              return(
                <Track key={track.track.track_id} track={track.track}/>
              )
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
)(Search);
