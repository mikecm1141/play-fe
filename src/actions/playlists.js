import {
  PLAYLISTS_FETCH,
  PLAYLISTS_ADD,
  PLAYLIST_POST,
  PLAYLIST_ADD
} from '../constants/actionTypes';

const doFetchPlaylists = () => ({
  type: PLAYLISTS_FETCH
});

const doAddPlaylists = playlists => ({
  type: PLAYLISTS_ADD,
  playlists
});

const doPostPlaylist = playlistName => ({
  type: PLAYLIST_POST,
  playlistName
});

const doAddPlaylist = playlist => ({
  type: PLAYLIST_ADD,
  playlist
});

export {
  doFetchPlaylists,
  doAddPlaylists,
  doPostPlaylist,
  doAddPlaylist
};
