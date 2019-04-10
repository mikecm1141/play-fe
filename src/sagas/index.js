import { takeEvery, all } from 'redux-saga/effects';

import {
  ARTISTS_FETCH,
  TRACKS_FETCH,
  FAVORITE_POST,
  FAVORITES_FETCH,
  FAVORITE_REMOVE,
  PLAYLISTS_FETCH
} from '../constants/actionTypes';

import { handleFetchArtists } from './artists';
import { handleFetchTracks } from './tracks';
import {
  handlePostFavorite,
  handleFetchFavorites,
  handleRemoveFavorite
} from  './favorites';
import { handleFetchPlaylists } from './playlists';


function *watchAll() {
  yield all([
    takeEvery(ARTISTS_FETCH, handleFetchArtists),
    takeEvery(TRACKS_FETCH, handleFetchTracks),
    takeEvery(FAVORITE_POST, handlePostFavorite),
    takeEvery(FAVORITES_FETCH, handleFetchFavorites),
    takeEvery(FAVORITE_REMOVE, handleRemoveFavorite),
    takeEvery(PLAYLISTS_FETCH, handleFetchPlaylists)
  ])
}

export default watchAll;
