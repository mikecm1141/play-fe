const PLAY_URL = 'https://sheltered-lake-54213.herokuapp.com';

const postFavorite = songData => {
  const payload = {
    name: songData.track_name,
    artist_name: songData.artist_name,
    genre: 'Genre',
    song_rating: songData.track_rating
  }
  return fetch(PLAY_URL + '/api/v1/songs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
};

const fetchFavorites = () => {
  return fetch(PLAY_URL + '/api/v1/songs', {
    method: 'GET'
  })
    .then(response => response.json())
};

const deleteFavorite = favoriteId => {
  return fetch(PLAY_URL + '/api/v1/songs/' + favoriteId, {
    method: 'DELETE',
    mode: 'cors'
  });
};

export {
  postFavorite,
  fetchFavorites,
  deleteFavorite
};
