import { takeEvery, all } from 'redux-saga/effects';

import {
  ARTISTS_FETCH,
  TRACKS_FETCH,
  FAVORITE_POST,
  FAVORITES_FETCH,
  FAVORITE_REMOVE,
  PLAYLISTS_FETCH,
  PLAYLIST_POST
} from '../constants/actionTypes';

import { handleFetchArtists } from './artists';
import { handleFetchTracks } from './tracks';
import {
  handlePostFavorite,
  handleFetchFavorites,
  handleRemoveFavorite
} from  './favorites';
import { handleFetchPlaylists, handlePostPlaylist } from './playlists';


function *watchAll() {
  yield all([
    takeEvery(ARTISTS_FETCH, handleFetchArtists),
    takeEvery(TRACKS_FETCH, handleFetchTracks),
    takeEvery(FAVORITE_POST, handlePostFavorite),
    takeEvery(FAVORITES_FETCH, handleFetchFavorites),
    takeEvery(FAVORITE_REMOVE, handleRemoveFavorite),
    takeEvery(PLAYLISTS_FETCH, handleFetchPlaylists),
    takeEvery(PLAYLIST_POST, handlePostPlaylist)
  ])
}

export default watchAll;
