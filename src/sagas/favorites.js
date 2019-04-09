import { call, put } from 'redux-saga/effects';

import { doAddFavoriteError } from '../actions/favorites';
import { postFavorite } from '../api/favorites';

function* handlePostFavorite(action) {
  const { songData } = action;
  try {
    yield call(postFavorite, songData);
  } catch(error) {
    yield put(doAddFavoriteError(error));
  }
}

export {
  handlePostFavorite
};
