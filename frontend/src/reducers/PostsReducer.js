import {
  ADD_POST,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST,
} from '../actions';

export function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORY_POSTS:
      return [...state, ...action.posts];
    case RECEIVE_POST:
      return action.post
    case ADD_POST:
      return state;
    default:
      return state;
  }
}
