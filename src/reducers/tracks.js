import {
  TRACKS_ADD
} from '../constants/actionTypes';

const INITIAL_STATE = {
  tracks: [],
  error: null
};

const applyAddTracks = (state, action) => ({
  tracks: action.tracks,
  error: null
});

function artistsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TRACKS_ADD : {
      return applyAddTracks(state, action);
    }
    default : return state;
  }
}

export default artistsReducer;
