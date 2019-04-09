import {
  FAVORITES_ADD,
  FAVORITE_REMOVE_LOCAL
} from '../constants/actionTypes';

const INITIAL_STATE = {
  favorites: [],
  error: null
};

const applyAddFavorites = (state, action) => ({
  favorites: action.favorites,
  error: null
});

const applyRemoveFavorite = (state, action) => ({
  favorites: state,
  error: null
});

function favoritesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FAVORITES_ADD : {
      return applyAddFavorites(state, action)
    }
    case FAVORITE_REMOVE_LOCAL : {
      let newState = Object.assign([], state);
      newState = newState.favorites.filter(favorite => {
        return favorite.id !== action.favoriteId;
      })
      return applyRemoveFavorite(newState, action);
    }
    default : return state;
  }
}

export default favoritesReducer;
