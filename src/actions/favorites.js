import {
  FAVORITE_POST,
  FAVORITE_POST_ERROR,
  FAVORITES_FETCH,
  FAVORITES_FETCH_ERROR,
  FAVORITES_ADD,
  FAVORITE_REMOVE,
  FAVORITE_REMOVE_LOCAL
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

const doRemoveFavorite = favoriteId => ({
  type: FAVORITE_REMOVE,
  favoriteId
});

const doRemoveFavoriteLocal = favoriteId => ({
  type: FAVORITE_REMOVE_LOCAL,
  favoriteId
});

export {
  doAddFavorite,
  doAddFavoriteError,
  doFetchFavorites,
  doFetchFavoritesError,
  doAddFavorites,
  doRemoveFavorite,
  doRemoveFavoriteLocal
};
