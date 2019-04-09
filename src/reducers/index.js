import { combineReducers } from 'redux';

import artistsReducer from './artists';
import tracksReducer from './tracks';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  artistsState: artistsReducer,
  tracksState: tracksReducer,
  favoritesState: favoritesReducer
});

export default rootReducer;
