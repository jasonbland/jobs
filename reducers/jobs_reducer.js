import { FETCH_JOBS } from '../actions/types';

const INITIAL_SETUP = {
  results: []
};

export default function(state = INITIAL_SETUP, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
}
