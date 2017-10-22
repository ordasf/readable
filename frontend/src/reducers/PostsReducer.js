import {
  ADD_POST,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST,
} from '../actions';
import { DELETE_POST } from '../actions/PostActions';

export function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORY_POSTS:
      return [...state, ...action.posts];
    case RECEIVE_POST:
      return action.post;
    case ADD_POST:
      const newState = state.slice();
      newState.push(action.post);
      return newState;
    case DELETE_POST:
      return state.filter((post) => (post.id !== action.postId));
    default:
      return state;
  }
}
