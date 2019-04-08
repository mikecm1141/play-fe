const MUSIX_MATCH_URL = 'https://api.musixmatch.com/ws/1.1';

const fetchArtists = artistsName => {
  return fetch(`https://cors-anywhere.herokuapp.com/${MUSIX_MATCH_URL}/artist.search?q_artist=${artistsName}&format=json&apikey=6ad28f3bfd8438979401eba5775e6ae2&page_size=30`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}

export { fetchArtists };
