import {
  PLAYLISTS_ADD
} from '../constants/actionTypes';

const INITIAL_STATE = {
  playlists: [],
  error: null
};

const applyAddPlaylists = (state, action) => ({
  playlists: action.playlists,
  error: null
});

function playlistsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PLAYLISTS_ADD : {
      return applyAddPlaylists(state, action);
    }
    default : return state;
  }
}

export default playlistsReducer;
