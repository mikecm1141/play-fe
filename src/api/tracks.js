const MUSIX_MATCH_URL = 'https://api.musixmatch.com/ws/1.1';

const fetchTracks = artistId => {
  return fetch(`https://cors-anywhere.herokuapp.com/${MUSIX_MATCH_URL}/track.search?f_artist_id=${artistId}&format=json&apikey=6ad28f3bfd8438979401eba5775e6ae2&page_size=30&s_track_rating=desc`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}

export { fetchTracks };
