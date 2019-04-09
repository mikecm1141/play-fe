import {
  FAVORITE_POST,
  FAVORITE_POST_ERROR,
  FAVORITES_FETCH,
  FAVORITES_FETCH_ERROR,
  FAVORITES_ADD
} from '../constants/actionTypes';

const doAddFavorite = songData => ({
  type: FAVORITE_POST,
  songData
});

const doAddFavoriteError = error => ({
  type: FAVORITE_POST_ERROR,
  error
});

const doFetchFavorites = () => ({
  type: FAVORITES_FETCH
});

const doFetchFavoritesError = error => ({
  type: FAVORITES_FETCH_ERROR,
  error
});

const doAddFavorites = favorites => ({
  type: FAVORITES_ADD,
  favorites
});

export {
  doAddFavorite,
  doAddFavoriteError,
  doFetchFavorites,
  doFetchFavoritesError,
  doAddFavorites
};
