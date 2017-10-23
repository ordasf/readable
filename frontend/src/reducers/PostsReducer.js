import {
  ADD_POST,
  EDIT_POST,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions';

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
    case EDIT_POST:
      // TODO
      return state;
    case DELETE_POST:
      return state.filter((post) => (post.id !== action.postId));
    case UPVOTE_POST:
      return [action.post];
    case DOWNVOTE_POST:
      return [action.post];
    default:
      return state;
  }
}
