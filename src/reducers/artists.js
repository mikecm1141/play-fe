import {
  ARTISTS_ADD
} from '../constants/actionTypes';

const INITIAL_STATE = {
  artists: [],
  error: null
};

const applyAddArtists = (state, action) => ({
  artists: state.artists.concat(action.artists),
  error: null
});

function artistsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ARTISTS_ADD : {
      return applyAddArtists(state, action);
    }
    default : return state;
  }
}

export default artistsReducer;
