import {
  FAVORITE_POST,
  FAVORITE_POST_ERROR
} from '../constants/actionTypes';

const doAddFavorite = songData => ({
  type: FAVORITE_POST,
  songData
});

const doAddFavoriteError = error => ({
  type: FAVORITE_POST_ERROR,
  error
});

export {
  doAddFavorite,
  doAddFavoriteError
};
