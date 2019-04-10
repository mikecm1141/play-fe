import { combineReducers } from 'redux';

import artistsReducer from './artists';
import tracksReducer from './tracks';
import favoritesReducer from './favorites';
import playlistsReducer from './playlists';

const rootReducer = combineReducers({
  artistsState: artistsReducer,
  tracksState: tracksReducer,
  favoritesState: favoritesReducer,
  playlistsState: playlistsReducer
});

export default rootReducer;
