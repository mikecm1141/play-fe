import { call, put } from 'redux-saga/effects';

import { doAddTracks, doFetchTracksError } from '../actions/tracks';
import { fetchTracks } from '../api/tracks';

function* handleFetchTracks(action) {
  const { artistId } = action;
  try {
    const result = yield call(fetchTracks, artistId);
    yield put(doAddTracks(result.message.body.track_list));
  } catch (error) {
    yield put(doFetchTracksError(error));
  }
}

export {
  handleFetchTracks
};
