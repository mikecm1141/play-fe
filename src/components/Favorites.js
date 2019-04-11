import React, { Component } from 'react';

import { connect } from 'react-redux';

import { doFetchFavorites } from '../actions/favorites';
import { doFetchPlaylists, doPostPlaylistFavorite } from '../actions/playlists';
import '../styles/favorites.css';

import Favorite from './Favorite';
import PlaylistModal from './PlaylistModal';

const mapStateToProps = state => ({
  favorites: state.favoritesState,
  playlists: state.playlistsState
});

const mapDispatchToProps = dispatch => ({
  onFetchFavorites: () => dispatch(doFetchFavorites()),
  onFetchPlaylists: () => dispatch(doFetchPlaylists()),
  onPostPlaylistFavorite: (playlistId, favoriteId) => dispatch(doPostPlaylistFavorite(playlistId, favoriteId))
})

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedFavorite: null
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this);
  }

  componentDidMount() {
    this.props.onFetchFavorites();
    this.props.onFetchPlaylists();
  }

  handleOpenModal(favoriteId) {
    const { favorites } = this.props.favorites;
    this.setState({
      showModal: true,
      selectedFavorite: favorites.find(favorite => favorite.id === favoriteId)
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleAddToPlaylist(playlistId, favoriteId) {
    this.props.onPostPlaylistFavorite(playlistId, favoriteId);
  }

  render() {
    const { favorites } = this.props.favorites;
    const { showModal, selectedFavorite } = this.state;
    const { playlists } = this.props.playlists;
    return(
      <div className="favorites-container">
        {
          showModal && playlists.length > 0 &&
          <PlaylistModal closeModal={this.handleCloseModal}
                         playlists={playlists}
                         favorite={selectedFavorite}
                         addToPlaylist={this.handleAddToPlaylist}
          />
        }
        <div className="favorites-header">
          <div className="favorites-header-text">
            <h1>favorites.</h1>
            <h2>songs you can't live without</h2>
          </div>
        </div>
        <div className="fetch-data">
          {
            favorites.map(favorite => {
              return <Favorite {...favorite} 
                               key={favorite.id}
                               openModal={this.handleOpenModal}
                     />
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
