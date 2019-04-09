import { combineReducers } from 'redux';

import artistsReducer from './artists';
import tracksReducer from './tracks';

const rootReducer = combineReducers({
  artistsState: artistsReducer,
  tracksState: tracksReducer
});

export default rootReducer;
