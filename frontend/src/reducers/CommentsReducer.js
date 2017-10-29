import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  SORT_COMMENTS_BY_TIME,
  SORT_COMMENTS_BY_SCORE
} from '../actions';

export function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return [...state, ...action.comments];
    case ADD_COMMENT:
      return [...state, action.comment];
    case EDIT_COMMENT:
      return state.map(comment => (comment.id === action.comment.id ? action.comment : comment));
    case DELETE_COMMENT:
      return state.filter(comment => (comment.id !== action.commentId));
    case UPVOTE_COMMENT:
      return state.map(comment => (comment.id === action.comment.id ? action.comment : comment));
    case DOWNVOTE_COMMENT:
      return state.map(comment => (comment.id === action.comment.id ? action.comment : comment));
    case SORT_COMMENTS_BY_TIME:
      return action.comments.slice().sort((comment1, comment2) => (comment1.timestamp - comment2.timestamp));
    case SORT_COMMENTS_BY_SCORE:
      return action.comments.slice().sort((comment1, comment2) => (comment2.voteScore - comment1.voteScore));
    default:
      return state;
  }
}
