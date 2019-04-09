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

export {
  postFavorite
};
