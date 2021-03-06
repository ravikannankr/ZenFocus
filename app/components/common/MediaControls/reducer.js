import { PAUSE, RESUME } from 'common/MediaControls/types';

const initialState = {
  isPlaying: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAUSE: {
      return {
        isPlaying: false
      };
    }

    case RESUME: {
      return {
        isPlaying: true
      };
    }

    default: {
      return state;
    }
  }
};
