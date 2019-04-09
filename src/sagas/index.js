import { takeEvery, all } from 'redux-saga/effects';

import {
  ARTISTS_FETCH,
  TRACKS_FETCH
} from '../constants/actionTypes';

import { handleFetchArtists } from './artists';
import { handleFetchTracks } from './tracks';


function *watchAll() {
  yield all([
    takeEvery(ARTISTS_FETCH, handleFetchArtists),
    takeEvery(TRACKS_FETCH, handleFetchTracks)
  ])
}

export default watchAll;
