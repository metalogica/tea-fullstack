import _ from 'lodash';
import { FETCH_ALL_USERS } from '../actions';

export default function usersReducer(state={}, action) {
  switch(action.type) {
    case FETCH_ALL_USERS:
      return action.payload
    default:
      return state;
    end
  }
}
