import {
  TRACKS_FETCH,
  TRACKS_FETCH_ERROR,
  TRACKS_ADD
} from '../constants/actionTypes';

const doFetchTracks = artistId => ({
  type: TRACKS_FETCH,
  artistId
});

const doAddTracks = tracks => ({
  type: TRACKS_ADD,
  tracks
});

const doFetchTracksError = error => ({
  type: TRACKS_FETCH_ERROR,
  error
});

export {
  doFetchTracks,
  doAddTracks,
  doFetchTracksError
}
