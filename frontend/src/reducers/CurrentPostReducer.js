import {
  RECEIVE_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions';

const emptyPost = {
  id: '',
  timestamp: Date.now(),
  title: '',
  body: '',
  author: '',
  category: '',
  voteScore: 0
};

export function currentPost(state = emptyPost, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return action.post[0];
    case EDIT_POST:
      return action.post;
    case DELETE_POST:
      return emptyPost;
    case UPVOTE_POST:
      return action.post;
    case DOWNVOTE_POST:
      return action.post;
    default:
      return state;
  }
}
