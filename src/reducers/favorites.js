import {
  FAVORITES_ADD
} from '../constants/actionTypes';

const INITIAL_STATE = {
  favorites: [],
  error: null
};

const applyAddFavorites = (state, action) => ({
  favorites: action.favorites,
  error: null
});

function favoritesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FAVORITES_ADD : {
      return applyAddFavorites(state, action)
    }
    default : return state;
  }
}

export default favoritesReducer;
