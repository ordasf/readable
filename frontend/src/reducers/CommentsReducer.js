import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
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
    default:
      return state;
  }
}
