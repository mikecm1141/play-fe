import { call, put } from 'redux-saga/effects';

import {
  doAddFavoriteError,
  doAddFavorites,
  doFetchFavoritesError,
  doRemoveFavoriteLocal
} from '../actions/favorites';
import { postFavorite, fetchFavorites, deleteFavorite } from '../api/favorites';

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

function* handleRemoveFavorite(action) {
  const { favoriteId } = action;
  try {
    yield call(deleteFavorite, favoriteId);
    yield put(doRemoveFavoriteLocal(favoriteId));
  } catch(error) {
    console.error(error);
  }
}

export {
  handlePostFavorite,
  handleFetchFavorites,
  handleRemoveFavorite
};
