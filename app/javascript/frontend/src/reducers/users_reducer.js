import _ from 'lodash';
import { FETCH_ALL_USERS } from '../actions';

export default function (state={}, action) {
  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case FETCH_ALL_USERS:
      return action.payload
    default:
      return state;
  }
}
