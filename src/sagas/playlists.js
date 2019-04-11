import { call, put } from 'redux-saga/effects';

import {
  doAddPlaylists,
  doFetchPlaylists,
} from '../actions/playlists';
import {
  fetchPlaylists,
  postPlaylist,
  postPlaylistFavorite
} from '../api/playlists';

function* handleFetchPlaylists(action) {
  try {
    const result = yield call(fetchPlaylists);
    yield put(doAddPlaylists(result));
  } catch(error) {
    console.log(error);
  }
}

function* handlePostPlaylist(action) {
  try {
    yield call(postPlaylist, action.playlistName);
    yield put(doFetchPlaylists());
  } catch(error) {
    console.error(error);
  }
}

function* handlePostPlaylistFavorite(action) {
  try {
    yield call(postPlaylistFavorite, action.playlistId, action.favoriteId);
  } catch(error) {
    console.error(error);
  }
}

export {
  handleFetchPlaylists,
  handlePostPlaylist,
  handlePostPlaylistFavorite
};
