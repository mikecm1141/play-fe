const PLAY_URL = 'https://sheltered-lake-54213.herokuapp.com';

const fetchPlaylists = () => {
  return fetch(PLAY_URL + '/api/v1/playlists', {
    method: 'GET'
  })
    .then(response => response.json())
};

const postPlaylist = playlistName => {
  const payload = {
    playlist_name: playlistName
  };

  return fetch(PLAY_URL + '/api/v1/playlists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
};

const postPlaylistFavorite = (playlistId, favoriteId) => {
  fetch(`${PLAY_URL}/api/v1/playlists/${playlistId}/songs/${favoriteId}`, {
    method: 'POST'
  })
};

const deletePlaylistFavorite = (playlistId, favoriteId) => {
  fetch(`${PLAY_URL}/api/v1/playlists/${playlistId}/songs/${favoriteId}`, {
    method: 'DELETE'
  })
};

export {
  fetchPlaylists,
  postPlaylist,
  postPlaylistFavorite,
  deletePlaylistFavorite
};
