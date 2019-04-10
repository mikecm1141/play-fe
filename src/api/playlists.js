const PLAY_URL = 'https://sheltered-lake-54213.herokuapp.com';

const fetchPlaylists = () => {
  return fetch(PLAY_URL + '/api/v1/playlists', {
    method: 'GET'
  })
    .then(response => response.json())
};

export {
  fetchPlaylists
};
