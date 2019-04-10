import {
  PLAYLISTS_FETCH,
  PLAYLISTS_ADD
} from '../constants/actionTypes';

const doFetchPlaylists = () => ({
  type: PLAYLISTS_FETCH
});

const doAddPlaylists = playlists => ({
  type: PLAYLISTS_ADD,
  playlists
});

export {
  doFetchPlaylists,
  doAddPlaylists
};
