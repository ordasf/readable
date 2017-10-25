import {
  RECEIVE_COMMENTS,
  ADD_COMMENT
} from '../actions';

export function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return [...state, ...action.comments];
    case ADD_COMMENT:
      return [...state, action.comment];
    default:
      return state;
  }
}
