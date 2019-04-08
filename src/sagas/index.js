import { takeEvery, all } from 'redux-saga/effects';

import {
  ARTISTS_FETCH
} from '../constants/actionTypes';

import { handleFetchArtists } from './artists';


function *watchAll() {
  yield all([
    takeEvery(ARTISTS_FETCH, handleFetchArtists)
  ])
}

export default watchAll;
