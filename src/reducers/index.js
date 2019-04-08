import { combineReducers } from 'redux';

import artistsReducer from './artists';

const rootReducer = combineReducers({
  artistsState: artistsReducer
});

export default rootReducer;
