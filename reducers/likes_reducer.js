import _ from 'lodash';
import { CLEAR_LIKES, LIKE_JOB } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'jobkey');
    case CLEAR_LIKES:
      return [];
    default:
      return state;
  }
}
