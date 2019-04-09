import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchArtists } from '../actions/search';
import Artist from './Artist';

import '../styles/search.css';

const mapStateToProps = state => ({
  artistsState: state.artistsState
});

const mapDispatchToProps = dispatch => ({
  onFetchArtists: (artistName) =>  dispatch(doFetchArtists(artistName))
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: '',
      showArtists: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ artistName: e.target.value });
  }

  handleClick(e) {
    this.props.onFetchArtists(this.state.artistName);
    this.setState({ showArtists: true });
  }

  render() {
    const { artistsState } = this.props;
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
            artistsState.artists.length > 0 &&
            artistsState.artists.map(artist => {
              return(
                <Artist key={artist.artist.artist_id} artist={artist.artist}/>
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
