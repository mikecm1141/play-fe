import { call, put } from 'redux-saga/effects';

import { doAddPlaylists } from '../actions/playlists';
import { fetchPlaylists } from '../api/playlists';

function* handleFetchPlaylists(action) {
  try {
    const result = yield call(fetchPlaylists);
    yield put(doAddPlaylists(result));
  } catch(error) {
    console.log(error);
  }
}

export {
  handleFetchPlaylists
};
