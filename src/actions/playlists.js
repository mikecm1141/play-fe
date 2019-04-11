import {
  PLAYLISTS_FETCH,
  PLAYLISTS_ADD,
  PLAYLIST_POST,
  PLAYLIST_ADD,
  PLAYLIST_POST_FAVORITE
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

const doPostPlaylistFavorite = (playlistId, favoriteId) => ({
  type: PLAYLIST_POST_FAVORITE,
  playlistId,
  favoriteId
});

export {
  doFetchPlaylists,
  doAddPlaylists,
  doPostPlaylist,
  doAddPlaylist,
  doPostPlaylistFavorite
};
