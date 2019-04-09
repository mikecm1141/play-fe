import { call, put } from 'redux-saga/effects';

import { doAddArtists, doFetchArtistsError } from '../actions/search';
import { fetchArtists } from '../api/artists';

function* handleFetchArtists(action) {
  const { artistName } = action;
  try {
    const result = yield call(fetchArtists, artistName);
    yield put(doAddArtists(result.message.body.artist_list));
  } catch (error) {
    yield put(doFetchArtistsError(error));
  }
}

export {
  handleFetchArtists
};
