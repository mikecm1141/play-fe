import { call, put } from 'redux-saga/effects';

import {
  doAddFavoriteError,
  doAddFavorites,
  doFetchFavoritesError
} from '../actions/favorites';
import { postFavorite, fetchFavorites } from '../api/favorites';

function* handlePostFavorite(action) {
  const { songData } = action;
  try {
    yield call(postFavorite, songData);
  } catch(error) {
    yield put(doAddFavoriteError(error));
  }
}

function* handleFetchFavorites(action) {
  try {
    const result = yield call(fetchFavorites);
    yield put(doAddFavorites(result));
  } catch(error) {
    yield put(doFetchFavoritesError(error));
  }
}

export {
  handlePostFavorite,
  handleFetchFavorites
};
