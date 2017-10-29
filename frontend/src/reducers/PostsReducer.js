import {
  ADD_POST,
  EDIT_POST,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  SORT_POSTS_BY_TIME,
  SORT_POSTS_BY_SCORE
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
      return state.map((post) => (post.id === action.post.id) ? action.post : post);
    case DELETE_POST:
      return state.filter((post) => (post.id !== action.postId));
    case UPVOTE_POST:
      return [action.post];
    case DOWNVOTE_POST:
      return [action.post];
    case SORT_POSTS_BY_TIME:
      return action.posts.slice().sort((post1, post2) => (post1.timestamp - post2.timestamp));
    case SORT_POSTS_BY_SCORE:
      return action.posts.slice().sort((post1, post2) => (post2.voteScore - post1.voteScore));
    default:
      return state;
  }
}
