import {
  ARTISTS_FETCH,
  ARTISTS_FETCH_ERROR,
  ARTISTS_ADD
} from '../constants/actionTypes';

const doFetchArtists = artistName => ({
  type: ARTISTS_FETCH,
  artistName
});

const doFetchArtistsError = error => ({
  type: ARTISTS_FETCH_ERROR,
  error
});

const doAddArtists = artists => ({
  type: ARTISTS_ADD,
  artists
})

export {
  doFetchArtists,
  doFetchArtistsError,
  doAddArtists
};
